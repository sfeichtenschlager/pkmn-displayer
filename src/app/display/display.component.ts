import {Component, EventEmitter, inject, Input, OnInit, Output} from '@angular/core';
import {ApiLoaderService} from '../api-loader.service';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  api = inject(ApiLoaderService);
  sprite!: string;
  types!: string[];

  @Input() pkmnName!: string;

  async ngOnInit() {
    await this.callPkmnApi(this.pkmnName);
  }

  async callPkmnApi(pkmnName: string) {
    const res = await this.api.loadSprite(pkmnName);
    this.sprite = res.sprite;
    this.types = res.types;
  }

  /**
   * This function handles edge cases of the PokeApi.
   * For example, PokeApi requires "Mr. Mime" to be written as "Mr-Mime".
   * Therefore, this function can be edited for any edge cases you would like to handle.
   * These cases include Paradox Pokemon, Pokemon with dashes and/or spaces in their names.
   * If I forgot any names with special cases, feel free to add them yourself or open an issue on GitHub.
   * @param pkmnName name of the Pokemon
   * @returns 
   */
  nameFixer(pkmnName: string): string {
    const specialCases = [
      "Ho-oh", "Mr-Mime", "Mime-Jr", "Porygon-2", "Porygon-Z", "Type-Null", 
      "Jangmo-o", "Hakamo-o", "Kommo-o",
      "Tapu-Koko", "Tapu-Lele", "Tapu-Bulu", "Tapu-Fini",
      "Great-Tusk", "Flutter-Mane", "Brute-Bonnet", "Scream-Tail", "Slither-Wing", "Sandy-Shocks", "Roaring-Moon",
      "Walking-Wake", "Gourging-Fire", "Raging-Bolt",
      "Iron-Treads", "Iron-Bundle", "Iron-Hands", "Iron-Jugulis", "Iron-Moth", "Iron-Thorns", "Iron-Valiant",
      "Iron-Leaves", "Iron-Boulder", "Iron-Crown",
      "Wo-Chien", "Chi-Yu", "Chien-Pao", "Ting-Lu"
    ];
  
    // this handles name mapping of specific Pokemon
    if (specialCases.includes(pkmnName)) {
      switch (pkmnName) {
        case "Flutter-Mane":
          return "Flutter Mane"
        case "Mr-Mime":
          return "Mr. Mime"
        case "Mime-Jr":
          return "Mime Jr."
        case "Type-Null":
          return "Type: Null"
      }

      // this handles the names of all Iron paradox Pokemon
      if (pkmnName.includes('Iron')) {
        const baseName = pkmnName.split('-');
        return baseName.join(" ")
      }
      return pkmnName;
    }
  
    // this handles names that have to be rewritten for PokeApi to work, f.e. turns "Basculegion-male" into "Basculegion"
    if (pkmnName.includes('-')) {
      const [baseName] = pkmnName.split('-');
      return baseName;
    }
  
    return pkmnName;
  }
}
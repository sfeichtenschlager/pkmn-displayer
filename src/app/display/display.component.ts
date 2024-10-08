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

}

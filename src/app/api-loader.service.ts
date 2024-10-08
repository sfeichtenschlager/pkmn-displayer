import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs'; // To convert Observable to Promise

@Injectable({
  providedIn: 'root'
})
export class ApiLoaderService {
  private http = inject(HttpClient);

  constructor() { }

  async loadSprite(pkmnName: string): Promise<{sprite: string, types: string[]}> {
    let spriteUrl: string;
    let types: string[];

    const response: any = await firstValueFrom(
      this.http.get(`https://pokeapi.co/api/v2/pokemon/${pkmnName.toLowerCase()}`)
    );

    spriteUrl = response.sprites.front_default;
    types = response.types.map((typeSlot: any) => typeSlot.type.name.toUpperCase());

    return { sprite: spriteUrl, types: types };
  }
}

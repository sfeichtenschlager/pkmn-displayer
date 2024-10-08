import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DisplayComponent} from './display/display.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DisplayComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PkmnDisplayer';

  // 2024-Oct-08
  pkmnList = "Bulbasaur\n" +
    "Ivysaur\n" +
    "Venusaur\n" +
    "Torchic\n" +
    "Combusken\n" +
    "Blaziken\n" +
    "Oshawott\n" +
    "Dewott\n" +
    "Samurott\n" +
    "Spearow\n" +
    "Fearow\n" +
    "Deerling\n" +
    "Sawsbuck\n" +
    "Teddiursa\n" +
    "Ursaring\n" +
    "Ursaluna\n" +
    "Houndour\n" +
    "Houndoom\n" +
    "Sentret\n" +
    "Furret\n" +
    "Sneasel\n" +
    "Weavile\n" +
    "Snover\n" +
    "Abomasnow\n" +
    "Hoothoot\n" +
    "Noctowl\n" +
    "Pineco\n" +
    "Forretress\n" +
    "Swinub\n" +
    "Piloswine\n" +
    "Mamoswine\n" +
    "Munchlax\n" +
    "Snorlax\n" +
    "Snorunt\n" +
    "Glalie\n" +
    "Froslass\n" +
    "Phantump\n" +
    "Trevenant\n" +
    "Vanillish\n" +
    "Vanillite\n" +
    "Vanilluxe\n" +
    "Roggenrola\n" +
    "Boldore\n" +
    "Gigalith\n" +
    "Meditite\n" +
    "Medicham\n" +
    "Meowth\n" +
    "Persian\n" +
    "Trubbish\n" +
    "Garbodor\n" +
    "Wattrel\n" +
    "Kilowattrel\n" +
    "Rotom\n" +
    "Murkrow\n" +
    "Honchkrow\n" +
    "Finneon\n" +
    "Lumineon\n" +
    "Mantyke\n" +
    "Mantine\n" +
    "Chinchou\n" +
    "Lanturn\n" +
    "Spheal\n" +
    "Sealeo\n" +
    "Walrein\n" +
    "Piplup\n" +
    "Prinplup\n" +
    "Empoleon\n" +
    "Noibat\n" +
    "Noivern\n" +
    "Mudkip\n" +
    "Marshtomp\n" +
    "Swampert\n" +
    "Aron\n" +
    "Lairon\n" +
    "Aggron\n" +
    "Sewaddle\n" +
    "Swadloon\n" +
    "Leavanny\n" +
    "Heracross\n" +
    "Pumpkaboo-average\n" +
    "Gourgeist-average\n" +
    "Basculin-red-striped\n" +
    "Basculegion-male\n" +
    "Lillipup\n" +
    "Herdier\n" +
    "Stoutland\n" +
    "Mareep\n" +
    "Flaaffy\n" +
    "Ampharos\n" +
    "Bouffalant\n" +
    "Poliwag\n" +
    "Poliwhirl\n" +
    "Poliwrath\n" +
    "Politoed\n" +
    "Combee\n" +
    "Vespiquen\n" +
    "Cottonee\n" +
    "Whimsicott\n" +
    "Ponyta\n" +
    "Rapidash\n" +
    "Cyndaquil\n" +
    "Quilava\n" +
    "Typhlosion\n" +
    "Applin\n" +
    "Flapple\n" +
    "Appletun\n" +
    "Dipplin\n" +
    "Hydrapple\n" +
    "Igglybuff\n" +
    "Jigglypuff\n" +
    "Wigglytuff\n" +
    "Drifloon\n" +
    "Drifblim\n" +
    "Eevee\n" +
    "Flareon\n" +
    "Vaporeon\n" +
    "Jolteon\n" +
    "Espeon\n" +
    "Umbreon\n" +
    "Leafeon\n" +
    "Glaceon\n" +
    "Sylveon\n" +
    "Karrablast\n" +
    "Escavalier\n" +
    "Shelmet\n" +
    "Accelgor\n" +
    "Scatterbug\n" +
    "Spewpa\n" +
    "Vivillon\n" +
    "Emolga\n" +
    "Pancham\n" +
    "Pangoro\n" +
    "Shellos\n" +
    "Gastrodon\n" +
    "Shuppet\n" +
    "Banette\n" +
    "Croagunk\n" +
    "Toxicroak\n" +
    "Misdreavus\n" +
    "Mismagius\n" +
    "Ducklett\n" +
    "Swanna\n" +
    "Tynamo\n" +
    "Eelektrik\n" +
    "Eelektross\n" +
    "Rowlet\n" +
    "Dartrix\n" +
    "Decidueye\n" +
    "Goomy\n" +
    "Sliggoo-hisui\n" +
    "Goodra-hisui\n" +
    "Wooper\n" +
    "Quagsire\n" +
    "Gligar\n" +
    "Gliscor\n" +
    "Tyrogue\n" +
    "Hitmonlee\n" +
    "Hitmonchan\n" +
    "Hitmontop\n" +
    "Hawlucha\n" +
    "Joltik\n" +
    "Galvantula\n" +
    "Drilbur\n" +
    "Excadrill\n" +
    "Bronzor\n" +
    "Bronzong\n" +
    "Lapras\n" +
    "Snivy\n" +
    "Servine\n" +
    "Serperior\n" +
    "Flabebe\n" +
    "Floette\n" +
    "Florges\n" +
    "Tirtouga\n" +
    "Carracosta\n" +
    "Lileep\n" +
    "Cradily\n" +
    "Chingling\n" +
    "Chimecho\n" +
    "Helioptile\n" +
    "Heliolisk\n" +
    "Darumaka\n" +
    "Darmanitan-standard\n" +
    "Munna\n" +
    "Musharna\n" +
    "Onix\n" +
    "Steelix\n" +
    "Sigilyph\n" +
    "Slugma\n" +
    "Magcargo\n" +
    "Aipom\n" +
    "Ambipom\n" +
    "Skarmory\n" +
    "Heatmor\n" +
    "Durant\n" +
    "Dhelmise\n" +
    "Indeedee-male\n" +
    "Slowpoke-galar\n" +
    "Slowbro-galar\n" +
    "Slowking-galar\n" +
    "Togepi\n" +
    "Togetic\n" +
    "Togekiss\n" +
    "Axew\n" +
    "Fraxure\n" +
    "Haxorus\n" +
    "Skrelp\n" +
    "Dragalge\n" +
    "Solosis\n" +
    "Duosion\n" +
    "Reuniclus\n" +
    "Morelull\n" +
    "Shiinotic\n" +
    "Phanpy\n" +
    "Donphan\n" +
    "Litwick\n" +
    "Lampent\n" +
    "Chandelure\n" +
    "Zorua\n" +
    "Zoroark\n" +
    "Dwebble\n" +
    "Crustle\n" +
    "Blitzle\n" +
    "Zebstrika\n" +
    "Cutiefly\n" +
    "Ribombee\n" +
    "Gastly\n" +
    "Haunter\n" +
    "Gengar\n" +
    "Elekid\n" +
    "Electabuzz\n" +
    "Electivire\n" +
    "Magby\n" +
    "Magmar\n" +
    "Magmortar\n" +
    "Scraggy\n" +
    "Scrafty\n" +
    "Qwilfish-hisui\n" +
    "Overqwil\n" +
    "Remoraid\n" +
    "Octillery\n" +
    "Klefki\n" +
    "Inkay\n" +
    "Malamar\n" +
    "Golett\n" +
    "Golurk\n" +
    "Skorupi\n" +
    "Drapion\n" +
    "Turtwig\n" +
    "Grotle\n" +
    "Torterra\n" +
    "Pawniard\n" +
    "Bisharp\n" +
    "Larvitar\n" +
    "Pupitar\n" +
    "Tyranitar\n" +
    "Entei\n" +
    "Raikou\n" +
    "Suicune\n" +
    "Jirachi\n" +
    "Reshiram\n" +
    "Zekrom"

  pkmnSplit = this.pkmnList.split('\n').map(pkmn => pkmn.trim());
}

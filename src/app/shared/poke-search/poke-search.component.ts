// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-poke-search',
//   templateUrl: './poke-search.component.html',
//   styleUrls: ['./poke-search.component.scss']
// })
// export class PokeSearchComponent {

// }
import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  HostListener,
} from '@angular/core';
import { ScrollService } from 'src/app/scroll.service';
import { DssOptionsInterface } from 'src/app/service/interface-pokemon';
import { PokeApiService } from '../../service/poke-api.service';

@Component({
  selector: 'poke-search',
  templateUrl: './poke-search.component.html' ,
  styleUrls: ['./poke-search.component.scss'],

})
export class PokeSearchComponent implements OnInit {
  selectedPokemon?: string;
  options: DssOptionsInterface[] = [];

  @Output() public emmitSearch: EventEmitter<string> = new EventEmitter();

  constructor(
    private pokeApiService: PokeApiService,
    private scrollService: ScrollService
  ) {}

  ngOnInit(): void {
    this.loadPokemonOptions();
  }

  loadPokemonOptions() {
    this.pokeApiService.getAllPokemons().subscribe(
      (response: { results: DssOptionsInterface[] }) => {
        this.options = response.results.map((res: any) => {
          return {
            value: res.name,
            viewValue: res.name,
          };
        });
      },
      (error: any) => {
        console.error('Erro ao obter opções de pokemon', error);
      }
    );
  }

  @HostListener('window.scroll', [])
  onWindowScroll() {
    const scrollY = window.scrollY;
    this.scrollService.setScroll(scrollY);
  }

  public search(value: string) {
    this.emmitSearch.emit(value);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//Observable
import { Observable, map } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokeApiService {
  private url: string = `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100`;

  constructor(private http: HttpClient) {}

  listAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((resPokemon: any) => {
          this.apiGetPokemons(resPokemon.url).subscribe(
            (res) => (resPokemon.status = res)
          );
        });
      })
    );
  }

  get appListAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        res.results.map((resPokemons: any) => {
          this.apiGetPokemons(resPokemons.url).subscribe(
            (res) => (resPokemons.status = res)
          );
          // console.log(res);
        });
      })
    );
  }

  getAllPokemons(): Observable<any> {
    return this.http.get<any>(this.url).pipe(
      tap((res) => res),
      tap((res) => {
        return res.results.map((pokemon: any) => ({
          name: pokemon.name,
          url: pokemon.url,
        }));
      })
    );
  }

  public apiGetPokemons(url: string): Observable<any> {
    return this.http.get<any>(url).pipe(map((res) => res));
  }
}

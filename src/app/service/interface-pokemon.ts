export interface Pokemon {
  name: string;
  url: string;
  status: PokemonStatus;
  pokemons: string;
  Pokemon: any;
  results: any;
}

export interface PokemonStatus {
  id: number;
  types: PokemonType[];
  sprites: Sprites;
}

export interface PokemonType {
  slot: number;
  type: Type;
}

export interface Type {
  name: string;
  url: string;
}

export interface Sprites {
  black_default: string;
  back_shink: string;
  front_default: string;
  front_shiny: string;
  other: Other;
}

export interface Other {
  dream_world: Dream_world;
}

export interface Dream_world {
  front_default: string;
}

export interface DssOptionsInterface {
  value: string;
  viewValue: string;
}

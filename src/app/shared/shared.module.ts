// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { PokeHeaderComponent } from './poke-header/poke-header.component';
// import { PokeListComponent } from './poke-list/poke-list.component';
// import { PokeSearchComponent } from './poke-search/poke-search.component';



// @NgModule({
//   declarations: [
//     PokeHeaderComponent,
//     PokeListComponent,
//     PokeSearchComponent
//   ],
//   imports: [
//     CommonModule
//   ]
// })
// export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
  exports: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
  ]
})
export class SharedModule { }

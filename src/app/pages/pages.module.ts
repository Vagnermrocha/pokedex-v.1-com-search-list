// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { DetailsComponent } from './details/details.component';
// import { HomeComponent } from './home/home.component';



// @NgModule({
//   declarations: [
//     DetailsComponent,
//     HomeComponent
//   ],
//   imports: [
//     CommonModule
//   ]
// })
// export class PagesModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingModule } from './routing.module';

//Module
import { SharedModule } from './../shared/shared.module';


//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';




@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
  ]
})
export class PagesModule { }

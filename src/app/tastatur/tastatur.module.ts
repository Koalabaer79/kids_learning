import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TastaturRoutingModule } from './tastatur-routing.module';
import { TastaturComponent } from './tastatur.component';

@NgModule({
  declarations: [
    TastaturComponent,
  ],
  imports: [
    CommonModule,
    TastaturRoutingModule
  ]
})
export class TastaturModule {
}

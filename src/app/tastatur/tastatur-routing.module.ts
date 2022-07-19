import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TastaturComponent } from './tastatur.component';

const routes: Routes = [
	{
		path:'',
		component: TastaturComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TastaturRoutingModule { }

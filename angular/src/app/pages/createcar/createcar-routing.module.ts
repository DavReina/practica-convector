import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatecarComponent } from './createcar.component';


const routes: Routes = [{path: '', component: CreatecarComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatecarRoutingModule { }

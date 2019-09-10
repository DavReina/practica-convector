import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SidenavModule } from './components/sidenav/sidenav.module';


const routes: Routes = [
  {
    path: 'sidenav',
    component: SidenavComponent,
    children: [
      {
        path: 'createcar',
        loadChildren: () =>
          import('./pages/createcar/createcar.module').then(
            m=>m.CreatecarModule
          )
       },
       {
         path: 'cars',
         loadChildren: () => 
           import('./pages/cars/cars.module').then(
             m=>m.CarsModule
           )
       },
       {
         path: 'search',
         loadChildren: () =>
           import('./pages/search/search.module').then(
             m=>m.SearchModule
           )
       }
    ]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SidenavModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

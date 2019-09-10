import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { DataService } from 'src/app/data.service';
import {MatTableModule} from '@angular/material/table'; 


@NgModule({
  declarations: [CarsComponent],
  imports: [
    CommonModule,
    CarsRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatTableModule
  ],
  providers: [DataService]
})
export class CarsModule { }

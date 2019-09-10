import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/car.model';
import { DataService } from 'src/app/data.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class CarsComponent implements OnInit {
  constructor(private dataService: DataService) { }
  cars$: Car[];
  columnsToDisplay = ['_id', '_name', '_created', '_modified'];
  expandedElement: Car | null;

  ngOnInit() {
    return this.dataService.getCars()
      .subscribe(data => this.cars$ = data);
  }
}

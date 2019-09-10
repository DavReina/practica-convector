import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/car.model';
import { DataService } from 'src/app/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-createcar',
  templateUrl: './createcar.component.html',
  styleUrls: ['./createcar.component.css']
})
export class CreatecarComponent implements OnInit {
  constructor(private dataService: DataService) { }
  createForm = new FormGroup({
    marca: new FormControl(''),
    creado: new FormControl('', [
      Validators.required
    ])
  });
  message = '';
  cars$: Car[];

  ngOnInit() {
    this.dataService.getCars()
      .subscribe(data => this.cars$ = data);
  }

  onSubmit() {
    console.log(this.cars$);
    let cont = this.cars$.length;
    cont++;
    const newCar: Car = {
      _id: 'car#' + cont,
      _name: this.createForm.get('marca').value,
      _created: this.createForm.get('creado').value,
      _modified: 0
    };
    return this.dataService.createNewCar(newCar)
      .subscribe(body => this.message = body.toString());
  }

}

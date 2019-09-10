import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiGetAllUrl = '/api/getAllCars';
  apiCreate = '/api/createNewCar';

  constructor(private _http: HttpClient) { }

  getCars() {
    return this._http.get<Car[]>(this.apiGetAllUrl);
  }

  createNewCar(newCar: Car) {
    const newModel: ModelToPost = {
      car: {
        id: newCar._id,
        name: newCar._name,
        created: newCar._created,
        modified: newCar._modified
      }
    };
    return this._http.post(this.apiCreate, newModel);
  }
}

export class ModelToPost {
  car: {};
}

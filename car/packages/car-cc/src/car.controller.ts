import * as yup from 'yup';
import { ChaincodeTx } from '@worldsibu/convector-platform-fabric';
import {
  Controller,
  ConvectorController,
  Invokable,
  Param
} from '@worldsibu/convector-core';

import { Car } from './car.model';

@Controller('car')
export class CarController extends ConvectorController<ChaincodeTx> {
  @Invokable()
  public async create(
    @Param(Car)
    car: Car
  ) {
    await car.save();
  }
  @Invokable()
  public async get(
    @Param(yup.string())
    id: string
  ) {
    return await Car.getOne(id);
  }
  @Invokable()
  public async getAll() {
    return await Car.getAll();
  }
  @Invokable()
  public async update(
    @Param(yup.string())
    id: string,
    @Param(Car.schema())
    car: Car
  ) {
    let carro = await Car.getOne(id);
    if (!carro || !carro.id) {
      throw new Error(`Carro conel id ${id} no existe omeee`);
    }

    await carro.update(car);
  }
  @Invokable()
  public async delete(
    @Param(yup.string())
    id: string
  ) {
    let carro = await Car.getOne(id);
    if (!carro || !carro.id) {
      throw new Error(`Carro conel id ${id} no existe omeee`);
    }
    await carro.delete();
  }
}
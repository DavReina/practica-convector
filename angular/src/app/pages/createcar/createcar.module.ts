import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatecarRoutingModule } from './createcar-routing.module';
import { CreatecarComponent } from './createcar.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreatecarComponent],
  imports: [
    CommonModule,
    CreatecarRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CreatecarModule { }

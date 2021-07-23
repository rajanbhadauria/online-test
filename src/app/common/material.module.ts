import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatInputModule} from '@angular/material/input'; 


@NgModule({
  imports:[MatCardModule, MatSliderModule, MatButtonModule, MatFormFieldModule, MatToolbarModule, MatInputModule],
  exports: [
    MatCardModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatInputModule
  ]
})
export class MaterialModule { }

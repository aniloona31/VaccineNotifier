import { NgModule } from '@angular/core';
import { 
MatTabsModule
 } from '@angular/material/tabs';
 import {MatSelectModule} from '@angular/material/select';


 const MaterialComponents = [
  MatTabsModule,
  MatSelectModule
];


@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }

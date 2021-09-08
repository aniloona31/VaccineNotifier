import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialformComponent } from './materialform/materialform.component';
import { RegistrationComponent } from './registration/registration.component';
import { ValidateOtpComponent } from './validate-otp/validate-otp.component';


const routes: Routes = [
  { path : "" , component : MaterialformComponent},
  { path : "registration" , component : RegistrationComponent },
  { path : "validateOtp" , component : ValidateOtpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { OtpgeneratorService } from '../service/otpgenerator.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  phoneNumber ;
  constructor(private otp : OtpgeneratorService) { }

  ngOnInit(): void {
  }
  
  getOtp(){
    //console.log(this.phoneNumber);
    this.otp.generateOtp(this.phoneNumber);
    
  }
  
}

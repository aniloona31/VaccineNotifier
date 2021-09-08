import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { sha256 } from 'js-sha256';
import { OtpgeneratorService } from '../service/otpgenerator.service';
import { VerifyOTPService } from '../service/verify-otp.service';

@Component({
  selector: 'app-validate-otp',
  templateUrl: './validate-otp.component.html',
  styleUrls: ['./validate-otp.component.css']
})
export class ValidateOtpComponent implements OnInit {
  otp;
  constructor( private verificationService : VerifyOTPService) { }
  encodedOtp : string = "";
  ngOnInit(): void {
    
  }
  txid : string = sessionStorage.getItem('txnId');
  valid : boolean = false;
  validate(){
    this.encodedOtp = sha256(this.otp);
    console.log(sha256(this.otp));
    console.log(this.txid);
    this.verificationService.verify(this.encodedOtp,this.txid).subscribe(
      response =>{
        console.log(response);
      }
    )
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class OtpgeneratorService {

  constructor(private http  : HttpClient , private router : Router) { }
  txnId : string = "";
  phone : string;
  alreadySent : boolean = false;
  generateOtp(mobile){
    this.phone = mobile.toString();
    console.log("api called");
    this.http.post<any>('https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',{
      "mobile": this.phone
    }).subscribe(
      response => {
        console.log(response);
        sessionStorage.setItem('txnId',response.txnId);
        this.router.navigate(["validateOtp"]);
      }
    )
  }
}

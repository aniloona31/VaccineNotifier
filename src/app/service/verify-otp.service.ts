import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VerifyOTPService {
  data;
  constructor(private http : HttpClient) { }

  verify(otp,txnid){
      return this.data = this.http.post('https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP',{
      "otp": otp,
      "txnId": txnid
    });
  }
}

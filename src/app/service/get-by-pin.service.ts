import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sessions } from 'src/Model/Sessions';

@Injectable({
  providedIn: 'root'
})
export class GetByPinService {
  constructor(private http : HttpClient) { }

  getData(pincode,date){
    let sessions: Sessions[] = [];
     return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=${date}`);
    }
}

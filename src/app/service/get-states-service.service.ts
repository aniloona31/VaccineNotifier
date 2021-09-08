import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetStatesServiceService {

  constructor(private http : HttpClient) { }

  getStates(){
    return this.http.get<any>('https://cdn-api.co-vin.in/api/v2/admin/location/states');
  }
}

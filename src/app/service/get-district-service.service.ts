import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDistrictServiceService {

  constructor(private http : HttpClient) { }
  
  getDistrict(id){
    return this.http.get<any>(`https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`);
  }
}

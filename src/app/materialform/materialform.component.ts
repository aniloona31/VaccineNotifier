import { Component, OnInit } from '@angular/core';

import { Sessions } from 'src/Model/Sessions';
import { GetByDistrictService } from '../service/get-by-district.service';
import { GetByPinService } from '../service/get-by-pin.service';
import { GetDistrictServiceService } from '../service/get-district-service.service';
import { GetStatesServiceService } from '../service/get-states-service.service';

@Component({
  selector: 'app-materialform',
  templateUrl: './materialform.component.html',
  styleUrls: ['./materialform.component.css']
})



export class MaterialformComponent implements OnInit {

  pin: number;
  form1 : boolean = false;
  form2 : boolean = false;
  currentDate : Date = new Date();
  dateString : string = "";
  year : string;
  month : string;
  date : string;
  numberOfCenters : number = -1;
  index: number=0
  dataOfTable : Sessions[] ;
  uiData: any = [];
  constructor(private pinService : GetByPinService, 
    private stateService : GetStatesServiceService,
    private districtService : GetDistrictServiceService,
    private getDistrictData : GetByDistrictService
    ) { }

  ngOnInit(): void {
    
  }
  
  pinForm() {
  
    //console.log("pin called");
    this.form1 = true;
    this.form2 = false;

  }
  states = []; 
  selectedState = "";
  districtForm() {
    //console.log("district called");
    this.form1 = false;
    this.form2 = true;

    this.stateService.getStates().subscribe(
      response => {
        //console.log(response);
        this.states = response.states;
      }
    )

  }
  districts = [];
  state_id;
  selectedDistrict;
  districtId;
  getDistrictsFromState(event){
    // console.log(event);
    
    this.selectedState = event.target.value;
    //console.log(this.selectedState);
    if(this.selectedState){
      this.states.forEach(element => {
        if(this.selectedState == element.state_name){
          this.state_id = element.state_id;
        }
      });

      this.districtService.getDistrict(this.state_id).subscribe(
        response => {
          //console.log(response);
          this.districts = response.districts;
        }
      )
    }

  }
  
  getDistrictId(event){
    this.selectedDistrict = event.target.value;
    this.districts.forEach(element => {
      if(this.selectedDistrict == element.district_name){
        this.districtId = element.district_id;
      }
    });
  }

  getDataByDistrict(){
    this.year = this.currentDate.getFullYear().toString(); 
    this.month = (this.currentDate.getMonth() + 1).toString();
    this.date = this.currentDate.getUTCDate().toString();
    this.date = this.date + "-" + this.month + "-" + this.year;

    this.getDistrictData.getData(this.districtId,this.date).subscribe(
      response => {
        //console.log(response);
        this.dataOfTable = response.sessions;
        console.log(this.dataOfTable);
        this.numberOfCenters = response.sessions.length;
      }
    )
  }

  getDataByPin(){
    this.year = this.currentDate.getFullYear().toString(); 
    this.month = (this.currentDate.getMonth() + 1).toString();
    this.date = this.currentDate.getUTCDate().toString();
    this.date = this.date + "-" + this.month + "-" + this.year;
    //console.log(this.date);
    //console.log("getdatabypin called");
    this.pinService.getData(this.pin,this.date).subscribe(
      response =>{
        this.dataOfTable = response.sessions;
        console.log(this.dataOfTable);
        this.numberOfCenters = response.sessions.length;
       
      }
      );
      
 }
}



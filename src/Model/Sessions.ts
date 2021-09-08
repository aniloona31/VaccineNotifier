
export class Sessions{
    constructor(
    public center_id : number,
    public name : string,
    public address : string,
    public state_name : string,
    public district_name : string,
    public block_name : string,
    public pincode : number,
    public from : number,
    public to : number,
    public lat : number,
    public long : number,
    public fee_type : string,
    public session_id : string,
    public date : string,
    public available_capacity : number,
    public available_capacity_dose1 : number,
    public available_capacity_dose2 : number,
    public fee : string,
    public min_age_limit : number,
    public allow_all_age : boolean,
    public vaccine : string,
    public slots:string[]
    ){}
  }

  
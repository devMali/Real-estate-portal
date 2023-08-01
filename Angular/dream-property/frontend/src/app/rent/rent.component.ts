import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent {

  rentPropArr : any[] = [];

  constructor(private http:HttpClient,private router:Router){
    this.getRentProp()
  }



  getRentProp(){
    this.http.get("http://localhost:3031/pview/cat/rent")
    .subscribe((propData : any) =>{
      console.log("propdata:",propData.data);
      this.rentPropArr = propData;
    })
  }

}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent {

  buyPropArr : any[] = [];

  constructor(private http:HttpClient,private router:Router){
    this.getRentProp()
  }



  getRentProp(){
    this.http.get("http://localhost:3031/pview/cat/sell")
    .subscribe((propData : any) =>{
      console.log("propdata:",propData.data);
      this.buyPropArr = propData;
    })
  }
  
}

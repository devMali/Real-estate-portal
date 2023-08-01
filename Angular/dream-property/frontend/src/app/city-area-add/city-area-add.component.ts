import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-city-area-add',
  templateUrl: './city-area-add.component.html',
  styleUrls: ['./city-area-add.component.css']
})
export class CityAreaAddComponent {

  cityArr : any [] = [];

  cityForm = new FormGroup({
    cname: new FormControl(""),
  })

  areaForm = new FormGroup({
    aname: new FormControl(""),
    cid: new FormControl(""),
  })

  constructor(private http : HttpClient,private toastr : ToastrService){
    this.getCity();
  }

  addCity(){

    const data = this.cityForm.value;

    this.http.post('http://localhost:3031/cins',data)
    .subscribe(() => {
      this.toastr.success("City inserted successfully")
      this.cityForm.reset()
    },err => {
      this.toastr.error("Please insert unique city name")
   })
  }

  addArea(){

    const data = this.areaForm.value;

    this.http.post('http://localhost:3031/ains',data)
    .subscribe(() => {
      this.toastr.success("Area inserted successfully")
      this.areaForm.reset()
    },err => {
      this.toastr.error("Some error occurred")
   })
  }

  getCity(){
    this.http.get("http://localhost:3031/cview/")
    .subscribe((cityData : any) =>{
      this.cityArr = cityData;
      console.log(this.cityArr);

    })
  }
}

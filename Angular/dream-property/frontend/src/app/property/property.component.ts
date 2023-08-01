import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Emitter } from '../emitters/emitter';
import { ShareidService } from '../services/shareid.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  propArr : any[] = [];
  id: number = 0;
  message = '';
  role : string = 'user';

  constructor(private http:HttpClient,private router:Router,private shareid : ShareidService){
    this.getProp()
  }


  ngOnInit(){
    this.http.get('http://localhost:3031/uview/login/home',{withCredentials:true})
    .subscribe((res:any ) => {
      Emitter.authEmitter.emit(true)

      if(res.role === 'admin'){
        Emitter.authAdminEmitter.emit(true);
        this.role = res.role;
        this.shareid.setRole(this.role);
        //alert("property :"+this.role)

      }
      else{
        Emitter.authAdminEmitter.emit(false);
        this.shareid.setRole(this.role);
       // alert("property :"+this.role)
      }
      this.message = `Hey ${res.fname}`;
      console.log(res);
      this.id = res.id;
      this.shareid.setRole(this.role)
      this.shareid.setId(this.id)
      console.log("in property:"+this.id+" Role:"+this.role);
      },err => {
      Emitter.authEmitter.emit(false)
      Emitter.authAdminEmitter.emit(false)
      this.message = 'You are not logged in';

    });



  }

  getProp(){
    this.http.get("http://localhost:3031/pview/")
    .subscribe((propData : any) =>{
      this.propArr = propData;
    })
  }

}

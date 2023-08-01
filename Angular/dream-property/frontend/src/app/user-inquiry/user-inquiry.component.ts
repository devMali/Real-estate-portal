import { Component } from '@angular/core';
import { ShareidService } from '../services/shareid.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-inquiry',
  templateUrl: './user-inquiry.component.html',
  styleUrls: ['./user-inquiry.component.css']
})
export class UserInquiryComponent {

  id:any;
  propInq : any[] =[];
  msg : string=''
  bval :boolean = true;


  constructor(private shareid: ShareidService,
    private router:Router,private tostr : ToastrService,
    private http :HttpClient){this.getInqProp()}


  getInqProp(){
    this.id= this.shareid.getId()
    //console.log(this.id)
    this.http.get("http://localhost:3031/inqview/user/"+this.id)
    .subscribe((propData : any) =>{
      //this.propInq.push(propData);
      this.propInq = propData
      console.log(this.propInq);
      if(this.propInq.length === 0){
        this.bval = false;
        this.msg ="You have not did inquiry of any properties"
      }
    })
  }

}

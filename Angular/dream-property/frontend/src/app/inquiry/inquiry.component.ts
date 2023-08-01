import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ShareidService } from '../services/shareid.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent implements OnInit {

  id : any;
  uid :any;
  PropArr : any[] = [];

    inqForm = new FormGroup({
      message:new FormControl("",
      [
        Validators.required,
        Validators.maxLength(255)
      ]),

    });


    get message():FormControl{
      return this.inqForm.get('message') as FormControl;
    }



    constructor(
      private activatedRoute:ActivatedRoute,
      private http:HttpClient,
      private shareid : ShareidService,
      private router : Router,
      private toastr : ToastrService
      ){this.uid  = this.shareid.getId()}

      submitInq(){
       const msg = this.inqForm.value

       const data = {
        uid : this.uid,
        pid : this.id,
        message : msg.message
       }

       if(data.uid == 0){
        this.toastr.error("please login first")
        this.router.navigate(['auth'])
       }
       else{
          //console.log(data);
          this.http.post('http://localhost:3031/iins',data).
          subscribe(()=> this.toastr.success("Your inquiry have submitted...Thank you!"));
          this.inqForm.reset()
        }


      }
    ngOnInit(){
      this.id =this.activatedRoute.snapshot.paramMap.get('id')
     //alert(this.id)
      this.getPropById()
      this.uid  = this.shareid.getId()
      console.log("in inquiry:"+this.uid);
    }


    getPropById(){
      this.http.get('http://localhost:3031/pview/'+this.id)
      .subscribe((propData : any) =>{
        console.log("propdata:",propData);
        this.PropArr = propData;
      })

}

}

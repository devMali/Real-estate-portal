import { Component, OnInit } from '@angular/core';
import { ShareidService } from '../services/shareid.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id:any;
  userArr : any[] = [];
  constructor(private shareid: ShareidService,
    private router:Router,private tostr : ToastrService,
    private http :HttpClient){


   // this.id= this.shareid.getId()
  }

  ngOnInit(): void {
    this.id= this.shareid.getId()
    if(this.id === 0){
      this.tostr.error("You are not logged in")
      this.router.navigate(['auth'])
    }
    this.getUserById()
  }


  getUserById(){
    this.id= this.shareid.getId()
    console.log(this.id)
    this.http.get("http://localhost:3031/uview/"+this.id)
    .subscribe((userData : any) =>{
      this.userArr.push(userData);
      console.log(this.userArr);

    })
  }

}

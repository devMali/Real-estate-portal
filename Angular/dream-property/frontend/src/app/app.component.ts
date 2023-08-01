import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitter } from './emitters/emitter';
import { ShareidService } from './services/shareid.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {// implements OnInit {

  // title = 'Dream Property';
  // message = '';
  // role : string = 'user';
  // authenticated = false;
  // id : number =0;

  // constructor(private http:HttpClient,private shareid : ShareidService){ }


  // ngOnInit(){
  //   this.http.get('http://localhost:3031/uview/login/home',{withCredentials:true})
  //   .subscribe((res:any ) => {
  //     Emitter.authEmitter.emit(true)

  //     if(res.role === 'admin'){
  //       Emitter.authAdminEmitter.emit(true);
  //       this.shareid.setRole(this.role);
  //       alert("app :"+this.role)
  //     }
  //     else{
  //       Emitter.authAdminEmitter.emit(false);
  //       this.shareid.setRole(this.role);
  //       alert("app :"+this.role)
  //     }
  //     this.message = `Hey ${res.fname}`;
  //     console.log(res);
  //     this.id = res.id;
  //     this.shareid.setId(this.id)
  //     console.log("in property:"+this.id+" Role:"+this.role);
  //   },err => {
  //     Emitter.authEmitter.emit(false)
  //     Emitter.authAdminEmitter.emit(false)
  //     this.message = '';

  //   });

  // }


  // logout(){
  //   const con = confirm('Are you sure you want to logout')

  //   if(con === true){
  //   this.http.post('http://localhost:3031/uview/logout',{},{withCredentials:true})
  //   .subscribe(() => this.authenticated = false)

  // }

  // }
}

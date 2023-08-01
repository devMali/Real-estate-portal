import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitter } from '../emitters/emitter';
import { ShareidService } from '../services/shareid.service';
import { faHome,faLock ,faUnlock,faUser,faBars,faUserTie} from '@fortawesome/free-solid-svg-icons'
import { FormControl, FormGroup } from '@angular/forms';
import { SearchService } from '../services/search.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  admin =faUserTie
  bars = faBars
  user = faUser
  unlock = faUnlock
  lock = faLock;
  home = faHome;
  authenticated = false;
  adminAuth = false;
  role : any;

  form = new FormGroup({
    search: new FormControl("")
  })

  search = this.form.value.search;
  searchPro(){
    //this.router.navigate([''])
    //console.log(this.form.value.search);
    this.srch.setValue(this.form.value.search)
    this.router.navigate(['/search',this.search]);
  }
  redirect(){
    this.router.navigate(['']);
  }
  constructor(
    private http:HttpClient,
    private shareid : ShareidService,
    private srch : SearchService,
    private router : Router
    ){
    this.role = this.shareid.getRole();
   }

  ngOnInit(): void {

    //alert("navbar called");
    Emitter.authEmitter.subscribe((auth) =>{
      this.authenticated = auth
    })

    Emitter.authAdminEmitter.subscribe((auth) =>{
      this.adminAuth = auth
    })

    this.role = this.shareid.getRole();
    //alert("old Nav :"+this.role)

  }

  logout(){
    const con = confirm('Are you sure you want to logout?')

    if(con === true){
    this.http.post('http://localhost:3031/uview/logout',{},{withCredentials:true})
    .subscribe(() => this.authenticated = false)
    this.shareid.setId(0)
    this.shareid.setRole('user')
  }

  }
}

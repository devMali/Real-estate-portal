import { Component } from '@angular/core';
import { faHome,faLock ,faUnlock,faUser,faBars,faAdd,faMessage,faUserTie,faUsers,faBuilding} from '@fortawesome/free-solid-svg-icons'
import { ShareidService } from '../services/shareid.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent {

  users = faUsers;
  bars = faBars
  user = faUser
  unlock = faUnlock
  lock = faLock;
  home = faHome;
  add = faAdd;
  msg = faMessage;
  admin = faUserTie;
  building = faBuilding;

  id:any;
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
  }


}

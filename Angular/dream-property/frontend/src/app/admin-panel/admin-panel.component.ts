import { Component, OnInit } from '@angular/core';
import { ShareidService } from '../services/shareid.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { faHome,faLock ,faUnlock,faUser,faBars,faAdd,faMessage,faUserTie,faUsers,faBuilding} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

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
  role : any;

  constructor(private shareid: ShareidService,
    private router:Router,private tostr : ToastrService,
    private http :HttpClient){}

    ngOnInit(): void {
      this.id= this.shareid.getId()
      if(this.id === 0){
        this.tostr.error("Access denied")
        this.router.navigate([''])
      }
      else{
        this.role = this.shareid.getRole();
        if(this.role === 'admin')
          this.tostr.success("welcome admin")
        else{
          this.tostr.error("Access denied");
          this.router.navigate([''])
        }
      }
    }

}

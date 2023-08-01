import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'
@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent  {
  userArr : any[] = []
  // dtOptions: Promise<DataTables.Settings>;

  constructor(private http : HttpClient){
    this.getUsers();
  }

  getUsers(){
    this.http.get('http://localhost:3031/uview/')
    .subscribe((userData:any)=>{
      this.userArr = userData;
      console.log(this.userArr);

    })
  }

}

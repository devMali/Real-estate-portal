import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { faUserTie} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  admin = faUserTie;
  inqArr  :any []=[]
  userArr  :any []=[]
  propArr  :any []=[]
  cityArr  :any []=[]
  areaArr  :any []=[]

  constructor(private http : HttpClient){
    this.inqCnt();
    this.areaCnt();
    this.cityCnt();
  }

  inqCnt(){
    this.http.get('http://localhost:3031/inqcnt/')
    .subscribe((inq : any) => {
      this.inqArr = inq;
      console.log(this.inqArr);

    })
  }
  cityCnt(){
    this.http.get('http://localhost:3031/citycnt/')
    .subscribe((city : any) => {
      this.cityArr = city
      console.log(this.cityArr);
    })
  }
  areaCnt(){
    this.http.get('http://localhost:3031/areacnt/')
    .subscribe((area : any) => {
      this.areaArr = area;
      console.log(this.areaArr);
    })
  }

  userCnt(){
    this.http.get('http://localhost:3031/usercnt/')
    .subscribe((user : any) => {
      this.userArr = user;
      console.log(this.userArr);
    })
  }


  propCnt(){
    this.http.get('http://localhost:3031/areacnt/')
    .subscribe((prop : any) => {
      this.propArr = prop;
      console.log(this.propArr);
    })
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inquiry-view',
  templateUrl: './inquiry-view.component.html',
  styleUrls: ['./inquiry-view.component.css']
})
export class InquiryViewComponent {

  inqArr : any[] = []
  constructor(private http : HttpClient){
    this.getInquiry();
  }

  getInquiry(){
    this.http.get('http://localhost:3031/inqview/')
    .subscribe((inqData:any)=>{
      this.inqArr = inqData;
      console.log(this.inqArr);

    })
  }

}

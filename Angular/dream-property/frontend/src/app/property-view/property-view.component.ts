import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.css']
})
export class PropertyViewComponent {
  propArr : any[] = []
  // dtOptions: Promise<DataTables.Settings>;

  constructor(private http : HttpClient,private tostr:ToastrService){
    this.getInquiry();
  }

  getInquiry(){
    this.http.get('http://localhost:3031/pview/')
    .subscribe((propData:any)=>{
      this.propArr = propData;
      console.log(this.propArr);

    })
  }

  onDelete(){
    this.tostr.error("Sorry you can't delete this property")
  }


}

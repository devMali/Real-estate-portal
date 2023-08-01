import { Component } from '@angular/core';
import { SearchService } from '../services/search.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  val : any;
  PropArr : any[] = [];
  msg : any = ''
  constructor(private srch : SearchService,
    private router:ActivatedRoute,
    private http : HttpClient,
    private tostr: ToastrService){
    //  this.val = this.srch.getValue()
    //    console.log(this.val)

    this.val =this.router.snapshot.params['qry']
    console.log(this.val);

    this.http.get('http://localhost:3031/searchprop/'+this.val)
    .subscribe((propData : any) =>{
      console.log("propdata:",propData);
      this.PropArr = propData;
      console.log(this.PropArr);
      if(this.PropArr.length === 0){
        this.tostr.error("no result found")
        this.msg = "Sorry no Property Found"
      }
    })
  }
}

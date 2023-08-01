import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscriber } from 'rxjs';
@Component({
  selector: 'app-property-update',
  templateUrl: './property-update.component.html',
  styleUrls: ['./property-update.component.css']
})
export class PropertyUpdateComponent {


  PropArr : any[] = [];
  areaArr : any[] = [];
  typeArr : any[] = [];
  base64code !: any
  id : any;
  propImg:any;


  onChange($event : Event){
    const target = $event.target as HTMLInputElement;

    const file : File = (target.files as FileList)[0];

    console.log(file);
    this.convertTobase64(file)
  }
  convertTobase64(file : File){
      const observable = new Observable((subscriber : Subscriber<any>) => {
        this.readFile(file,subscriber)
      })
      observable.subscribe((d) => {
        //console.log(d);
          this.base64code = d;
      })
  }

  readFile(file:File , subscriber : Subscriber<any>){
    const filereader = new FileReader()

    filereader.readAsDataURL(file);

    filereader.onload = () =>{
      subscriber.next(filereader.result);
      subscriber.complete()
    }

    filereader.onerror = () =>{
      subscriber.error()
      subscriber.complete()
    }
  }


  constructor(private http : HttpClient,
    private router:Router,
    private toastr : ToastrService,
    private activatedRoute:ActivatedRoute){
    this.getArea();
    this.getType();
    this.getPropById();
  }

  propUpForm  = new FormGroup({
    padd: new FormControl("",[Validators.required]),
    price: new FormControl("",[Validators.required]),
    description: new FormControl("",[Validators.required]),
    size: new FormControl("",[Validators.required]),
    img: new FormControl(""),
    is_sell: new FormControl(""),
    is_rent: new FormControl(""),
    aid:new FormControl("",[Validators.required]),
    tid:new FormControl("",[Validators.required]),

  })

  get padd():FormControl{
    return this.propUpForm.get('padd') as FormControl;
  }

  get price():FormControl{
    return this.propUpForm.get('price') as FormControl;
  }

  get description():FormControl{
    return this.propUpForm.get('description') as FormControl;
  }

  get size():FormControl{
    return this.propUpForm.get('size') as FormControl;
  }

  get img():FormControl{
    return this.propUpForm.get('img') as FormControl;
  }

  get aid():FormControl{
    return this.propUpForm.get('aid') as FormControl;
  }
  get tid():FormControl{
    return this.propUpForm.get('tid') as FormControl;
  }

  updatePro(){
    var rval,sval;
    const data = this.propUpForm.value;
    const {img,is_rent,is_sell,...data2} = data
    var pid =this.activatedRoute.snapshot.paramMap.get('id')

    if(data.is_rent === ''){
      rval=false;
    }else{
      rval = true;
    }

    if(data.is_sell === ''){
      sval=false;
    }else{
      sval = true;
    }

    const otherData = {
      id:pid,
      img:this.base64code,
      is_rent:  rval,
      is_sell: sval
    }

    const final = {...otherData,...data2}
    //console.log(final);

    this.http.put('http://localhost:3031/pup',final)
    .subscribe(() => {
      this.toastr.success("Property Updated successfully")
      this.propUpForm.reset()
      this.router.navigate(['../admin/view-property'])
    },err => {
      this.toastr.error("Some error occurred")
   })
  }

  getArea(){
    this.http.get("http://localhost:3031/aview/")
    .subscribe((areaData : any) =>{
      this.areaArr = areaData;
      console.log(this.areaArr);

    })
  }

  getType(){
    this.http.get("http://localhost:3031/tview/")
    .subscribe((typeData : any) =>{
      this.typeArr = typeData;
      console.log(this.typeArr);

    })
  }

  getPropById(){
    this.id =this.activatedRoute.snapshot.paramMap.get('id')
    this.http.get('http://localhost:3031/pview/'+this.id)
    .subscribe((propData : any) =>{
       console.warn(propData);
      // this.PropArr = propData
      this.propUpForm = new FormGroup({
        padd: new FormControl(propData[0]['padd']),
        price: new FormControl(propData[0]['price']),
        description: new FormControl(propData[0]['description']),
        size: new FormControl(propData[0]['size']),
        img: new FormControl(propData[0]['img']),
        is_sell: new FormControl(propData[0]['is_sell']),
        is_rent: new FormControl(propData[0]['is_rent']),
        aid:new FormControl(propData[0]['aid']),
        tid:new FormControl(propData[0]['tid']),
      })
      this.propImg = propData[0]['img'];
    })
}
}

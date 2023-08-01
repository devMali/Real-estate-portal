import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscriber } from 'rxjs';
@Component({
  selector: 'app-prop-add',
  templateUrl: './prop-add.component.html',
  styleUrls: ['./prop-add.component.css']
})
export class PropAddComponent {


  areaArr : any[] = [];
  typeArr : any[] = [];
  base64code !: any

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


  constructor(private http : HttpClient,private router:Router,private toastr : ToastrService){
    this.getArea();
    this.getType();
  }

  propAddForm  = new FormGroup({
    padd: new FormControl("",[Validators.required]),
    price: new FormControl("",[Validators.required]),
    description: new FormControl("",[Validators.required]),
    size: new FormControl("",[Validators.required]),
    img: new FormControl("",[Validators.required]),
    is_sell: new FormControl(""),
    is_rent: new FormControl(""),
    aid:new FormControl("",[Validators.required]),
    tid:new FormControl("",[Validators.required]),

  })

  get padd():FormControl{
    return this.propAddForm.get('padd') as FormControl;
  }

  get price():FormControl{
    return this.propAddForm.get('price') as FormControl;
  }

  get description():FormControl{
    return this.propAddForm.get('description') as FormControl;
  }

  get size():FormControl{
    return this.propAddForm.get('size') as FormControl;
  }

  get img():FormControl{
    return this.propAddForm.get('img') as FormControl;
  }

  get aid():FormControl{
    return this.propAddForm.get('aid') as FormControl;
  }
  get tid():FormControl{
    return this.propAddForm.get('tid') as FormControl;
  }

  addProp(){
    var rval,sval;
    const data = this.propAddForm.value;
    const {img,is_rent,is_sell,...data2} = data

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
      img:this.base64code,
      is_rent:  rval,
      is_sell: sval
    }

    const final = {...otherData,...data2}
    //console.log(final);

    this.http.post('http://localhost:3031/pins',final)
    .subscribe(() => {
      this.toastr.success("Property inserted successfully")
      this.propAddForm.reset()
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
}

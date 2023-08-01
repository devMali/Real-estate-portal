import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  other : string=''
  base64code !: any
  
  registerForm = new FormGroup({
    fname: new FormControl("",
    [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("[a-zA-Z].*")
    ]),
    lname: new FormControl("",
    [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("[a-zA-Z].*")
    ]),

    address: new FormControl("",[Validators.required ]),
    email: new FormControl("",[Validators.required, Validators.email]),
    mobile: new FormControl("",
    [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern("[0-9]*")

    ]),
    password: new FormControl("",
    [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$")
    ]),
    cpassword: new FormControl("",
    [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$")
    ]),
    uimg: new FormControl("",[Validators.required])
  });

  get fname():FormControl{
    return this.registerForm.get('fname') as FormControl;
  }

  get lname():FormControl{
    return this.registerForm.get('lname') as FormControl;
  }

  get address():FormControl{
    return this.registerForm.get('address') as FormControl;
  }

  get email():FormControl{
    return this.registerForm.get('email') as FormControl;
  }

  get mobile():FormControl{
    return this.registerForm.get('mobile') as FormControl;
  }

  get password():FormControl{
    return this.registerForm.get('password') as FormControl;
  }

  get cpassword():FormControl{
    return this.registerForm.get('cpassword') as FormControl;
  }


  ngOnInit(){
    }

    public handleAddressChange(address: any) {

    }

  constructor(private formBuilder:FormBuilder,private toastr : ToastrService,private http:HttpClient,private router : Router){}
  registerUser(){

       const {cpassword,uimg,...data} =this.registerForm.value
       const imgData = {
        uimg : this.base64code,
       }
       const final = {...imgData,...data}
      //console.log(final);

      if(this.registerForm.value.password === this.registerForm.value.cpassword)
      {
        this.http.post('http://localhost:3031/uins',final)
        .subscribe(()=> {
          this.toastr.success("Registartion successful")
          this.router.navigate(['../auth/login'])},
          err=> {this.toastr.error("This email is already in use")})
      }else{
        this.toastr.error("Both password must be same")
      }
  }

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

}

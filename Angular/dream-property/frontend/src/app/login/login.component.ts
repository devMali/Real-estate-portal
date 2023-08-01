import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //form!: FormGroup;
  form = new FormGroup({
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("",
    [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15),
      Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$")
    ])
  })

  get email():FormControl{
    return this.form.get('email') as FormControl;
  }

  get password():FormControl{
    return this.form.get('password') as FormControl;
  }

  constructor(private formBuilder:FormBuilder,
    private http : HttpClient,
    private router:Router,
    private toastr : ToastrService) {}

  ngOnInit(): void {

  }

  check():void{

    this.http.post('http://localhost:3031/uview/login',this.form.value,{
      withCredentials : true
    }).subscribe(()=> {
      this.toastr.success("Login successful")
      this.router.navigate([''])},
      err=> {this.toastr.error("Wrong credentials")})

   // console.log(this.form.getRawValue());
      this.form.reset()
  }
 }

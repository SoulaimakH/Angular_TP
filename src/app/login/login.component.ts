import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isSubmitted  =  false;
  
  myform = new FormGroup({
  email : new FormControl('', [Validators.required,Validators.email]),
  password :new FormControl('', [Validators.required,Validators.minLength(4)])
});

  constructor( private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   
  }
  get email() { return this.myform.get('email'); }

  get password() { return this.myform.get('password'); }

  signIn(){
    this.isSubmitted = true;
    console.log(this.myform.valid)
    if(this.myform.valid){
      this.router.navigateByUrl('/CV');
    }
   
  }
}

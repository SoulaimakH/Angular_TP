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
  
 myGroup = new FormGroup({
  email : new FormControl('', [Validators.required,Validators.email]),
  password :new FormControl('', [Validators.required,Validators.minLength(4)])
});

  constructor( private router:Router,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   
  }
  get email() { return this.myGroup.get('email'); }

  get password() { return this.myGroup.get('password'); }

  signIn(){
    this.isSubmitted = true;
    console.log(this.myGroup.valid)
    if(this.myGroup.valid){
      this.router.navigateByUrl('/CV');
    }
   
  }
}

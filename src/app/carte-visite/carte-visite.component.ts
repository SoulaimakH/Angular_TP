import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent implements OnInit {
   personne={
    firstname: 'Dakota ',
    lname: 'Johnston',
    Job: 'CEO Founder',
    Tel:'+012 (345) 6789',
    Adress:'205 Main Street, USA',
    email: 'dakota@gmail.com'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

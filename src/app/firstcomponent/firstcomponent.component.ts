import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {
  color ='red';
  constructor() { }

  ngOnInit(): void {
  }

  back(){
    this.color=''
  }

}

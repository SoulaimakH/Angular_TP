import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Output() sendMessageToDad = new EventEmitter<any>();
  @Input() personnes:Personne[]=[]
  color='white'
  number=4
  col: any[]=[{'col-md-1':'true'},{'col-md-2':'true'},{'col-md-3':'true'},{'col-md-4':'true'},{'col-md-5':'true'}]
    constructor() { }

  ngOnInit(): void {
  }
  sendData(p:any) {
    this.sendMessageToDad.emit(p);
  }
  getpersonne(personne:any) {
    // console.log(personne)
    this.sendMessageToDad.emit(personne);
   }
   tojson(){
    return this.col[this.number]
   }
}

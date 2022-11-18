import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne!: Personne;
  @Input()  background_color=''
  @Output() sendMessageToDad = new EventEmitter<any>();
  @Input()  col={'col-md-1': 'true' }
  constructor() { }
  ngOnInit(): void {
   
  }
  sendData(p:any) {
    this.sendMessageToDad.emit(p);
  }

}

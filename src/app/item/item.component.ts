import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from '../model/personne';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne!: Personne;
  @Input()  background_color=''
  //@Output() sendMessageToDad = new EventEmitter<any>();
  @Input()  col={'col-md-1': 'true' }
  constructor(private router:Router,) { }
  ngOnInit(): void {
   
  }
  sendData(p:any) {
   // this.sendMessageToDad.emit(p);
  }

  getCV(){
    this.router.navigate(['/detail/'+this.personne.id]);
  }

}

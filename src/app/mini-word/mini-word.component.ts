import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent implements OnInit {
  Mytext:string | undefined
 color='black'
 size=20
 family='Arial'
  constructor() { }

  ngOnInit(): void {
  }

}

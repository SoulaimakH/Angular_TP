import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSimilateur]'
})
export class SimilateurDirective {
  @Input() appSimilateur = '';
  constructor() { }

  Colors = ['green','red','blue','yellow','AliceBlue','BlueViolet','Chocolate','DarkCyan'];

  @HostBinding('style.color') 
  color!: string;

  @HostBinding('style.border-color')
  Colorborder!: string;

  @HostListener('keyup') Color() {
    const colorSet = Math.floor(this.Colors.length*Math.random());

    this.color =  this.Colors[colorSet];
    this.Colorborder = this.Colors[colorSet];
  }

 
}

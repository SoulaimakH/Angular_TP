import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
   if(value===""||value===" " )
   return "../assets/defaultimages.png"
   else
   return value
  }

}

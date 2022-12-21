import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {
   subject = new Subject<Personne>()

  personnesliste:Personne[]=[
    {
      id:"0",
      firstname: 'Dakota ',
      lname: 'Johnston',
      job: 'Data Scientist',
      Age:'50',
      Cin:'4443545435',
      Tel:'+012 (345) 6789',
      Adress:'205 Main Street, USA',
      email: 'dakota@gmail.com',
      image:'https://www.bootdey.com/img/Content/avatar/avatar6.png'
    },
    {
      id:"1",
      firstname: 'user1 ',
      lname: 'lastName',
      job: 'CEO Founder',
      Age:'35',
      Cin:'97865465',
      Tel:'+012 (563) 6789',
      Adress:'580 NewYork, USA',
      email: 'Mark@gmail.com',
      image:''
  },
  {
    id:"2",
    firstname: 'user2',
    lname: 'lastName2',
    job: 'CEO Founder',
    Age:'35',
    Cin:'97865465',
    Tel:'+012 (563) 6789',
    Adress:'580 NewYork, USA',
    email: 'Mark@gmail.com',
    image:' '
},
    {
      id:"3",
      firstname: 'Mark ',
      lname: 'Brin',
      job: 'CEO Founder',
      Age:'35',
      Cin:'97865465',
      Tel:'+012 (563) 6789',
      Adress:'580 NewYork, USA',
      email: 'Mark@gmail.com',
      image:'../assets/marc.jpg'
  }]
  constructor() { }

  selectPersonne(personne:Personne){
    this.subject.next(personne)
  }
}

import { Injectable } from '@angular/core';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {
  personnesliste:Personne[]=[
    {
      id:"1",
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
      id:"2",
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
    id:"3",
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
      id:"4",
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
}

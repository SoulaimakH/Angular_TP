import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class AmbauchServiceService {
  personnesliste:Personne[]=[]
  constructor() { }

  addCv(personne:Personne){
    if(this.personnesliste.indexOf(personne)==-1){
      this.personnesliste.push(personne)
      return 1 //this. showSuccess() 
    }
    else{
     return 0
  }
  
  }
}

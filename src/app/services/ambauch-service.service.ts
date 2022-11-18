import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Personne } from '../model/personne';

@Injectable({
  providedIn: 'root'
})
export class AmbauchServiceService {
  personnesliste:Personne[]=[]
  constructor(private toastr: ToastrService) { }

  addCv(personne:Personne){
    if(this.personnesliste.indexOf(personne)==-1){
      this.personnesliste.push(personne)
      return this. showSuccess() 
    }
    else{
      this.toastr.error("cv deja selectionné","failed")
    }
  }
  
  showSuccess() {
    this.toastr.success('Added  to embauchelist', 'successfully');
  }
}

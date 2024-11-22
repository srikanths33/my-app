import { Component } from '@angular/core';
import { PintrestService } from '../pintrest.service';

@Component({
  selector: 'app-pintrest',
  templateUrl: './pintrest.component.html',
  styleUrls: ['./pintrest.component.css']
})
export class PintrestComponent {

  pins:any=[];

  constructor(private _pintrestservice:PintrestService){

    _pintrestservice.getpintrest().subscribe(
      (data:any)=>{
        this.pins =data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )

  }

}

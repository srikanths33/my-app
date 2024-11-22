import { Component } from '@angular/core';
import { PokemanService } from '../pokeman.service';

@Component({
  selector: 'app-pokeman',
  templateUrl: './pokeman.component.html',
  styleUrls: ['./pokeman.component.css']
})
export class PokemanComponent {
  pokeman:any=[];


  constructor(private _pokeman:PokemanService){
    _pokeman.getPokeman().subscribe(
      (data:any)=>{
        this.pokeman=data
        // console.log(data,"hii")
      },
      (err:any)=>
        alert("Internal server error")
    )
  }

}

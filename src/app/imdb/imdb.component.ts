import { Component } from '@angular/core';
import { IMDbService } from '../imdb.service';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class IMDbComponent {

  imdb:any=[];

  constructor(private _imdb:IMDbService){
    _imdb.getIMDb().subscribe(
      (data:any)=>{
        this.imdb=data
      },
      (err:any)=>{
        alert("Internal server Error")
      }

    )
  }
  getimdb(rating:any){
    return(Math.floor(rating))
  }

}

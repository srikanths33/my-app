import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {


  weathers:any=[];


  constructor(private _weather:WeatherService){

    _weather.getweather().subscribe(
      (data:any)=>{
        this.weathers[0]=data;
        console.log(this.weathers);
      },
      (err:any)=>{
        alert("Internal server error")
      }       
    )

    }
}

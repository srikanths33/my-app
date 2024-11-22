import { Component } from '@angular/core';

@Component({
  selector: 'app-rectangle',
  templateUrl: './rectangle.component.html',
  styleUrls: ['./rectangle.component.css']
})
export class RectangleComponent {
  len:number=0;
  bre:number=0;
  result:number=0;

  area(){
    this.result=this.len*this.bre
  }

  peri(){
    this.result=(this.len+this.bre)*2
  }

}

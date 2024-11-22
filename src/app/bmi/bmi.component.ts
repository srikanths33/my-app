import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BMIComponent {

  height:number=0;
  weight:number=0;
  result:number=0;
  r1:string="";
  color:string="";

  calc(){
    this.result=this.weight/((this.height/100)*(this.height/100))

    this.result=parseFloat(this.result.toFixed(2));

    if(this.result>34.9){
      this.r1="extremly weight";
      this.color="red";
      
    }else if(this.result>29.9){
      this.r1="obese"
      this.color="blue";

    }else if(this.result>24.9){
      this.r1="overvweight"
      this.color="green";

    }else if(this.result>18.5){
      this.r1="normal weight"
      this.color="violet";

    }else{
      this.r1="under weight"
      this.color="yellow";

    }
    
  }

}

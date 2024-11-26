import { useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  public Userform:FormGroup = new FormGroup(
    {
      name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
      age:new FormControl('',[Validators.required,Validators.min(18),Validators.max(60)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      phone:new FormControl(),
      adress:new FormGroup({
       city:new FormControl(),
       pin:new FormControl(),
      }),
      type:new FormControl(),
      // busFee:new FormControl(),
      // hostelFee:new FormControl(),
      cards:new FormArray([])
    })

    get cardsFormArray(){
      return this.Userform.get('cards') as FormArray;
    }

    addcard(){
      this.cardsFormArray.push(
        new FormGroup({
          number:new FormControl(),
          expiry:new FormControl(),
          cvv:new FormControl(),
        })
      )
    }

    deletecard(i:number){
      this.cardsFormArray.removeAt(i);
    }

    constructor(){
      this.Userform.get("type")?.valueChanges.subscribe(
        (data:any)=>{

          if(data=='dayscholer'){
            this.Userform.addControl('busFee',new FormControl());
            this.Userform.removeControl('hostelFee');

          }
          else{
            this.Userform.addControl('hostelFee',new FormControl());
            this.Userform.removeControl('busFee');

          }
        }
      )
    }

  submit(){
    console.log(this.Userform);
  }

}

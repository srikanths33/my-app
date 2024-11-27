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
      phone:new FormControl('',[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
      adress:new FormGroup({
       city:new FormControl('',[Validators.required]),
       pin:new FormControl('',[Validators.required]),
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
          number:new FormControl('',[Validators.required]),
          expiry:new FormControl('',[Validators.required]),
          cvv:new FormControl('',[Validators.required]),
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

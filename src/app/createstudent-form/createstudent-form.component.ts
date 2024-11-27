import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createstudent-form',
  templateUrl: './createstudent-form.component.html',
  styleUrls: ['./createstudent-form.component.css']
})
export class CreatestudentFormComponent {

  public studentform:FormGroup=new FormGroup(
    {
    name: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    class: new FormControl('',[Validators.required]),
    fatherName:new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    dob: new FormControl('',[Validators.required]),
    addressLine: new FormGroup({
        city: new FormControl('',[Validators.required]),
         state: new FormControl('',[Validators.required]),
         pincode: new FormControl('',[Validators.required,Validators.min(100000),Validators.max(999999)]),
    }),
    type:new FormControl(),
    // busfee:new FormControl(),
    // hostelfee:new FormControl(),
    marks:new FormArray([]),
    })

    

    get marksFormArray(){
      return this.studentform.get('marks') as FormArray;
    }

    addmarks(){
      this.marksFormArray.push(
        new FormGroup({
          class:new FormControl('',[Validators.required, Validators.min(1)]),
          year:new FormControl('',[Validators.required,Validators.min(1900),Validators.max(2025)]),
          percantage:new FormControl('',[Validators.required,Validators.min(0),Validators.max(100)]),

          })
      )
    }

    deletemarks(i:number){
      this.marksFormArray.removeAt(i);
    }

    constructor(){
      this.studentform.get('type')?.valueChanges.subscribe(
        (data:any)=>{
          if(data=='dayScholor'){
            this.studentform.addControl('busfee',new FormControl());
            this.studentform.removeControl('hostelfee');
          }
          else{
            this.studentform.addControl('hostelfee',new FormControl());
            this.studentform.removeControl('busfee');
          }
        }
      )
    }

    

    submit(){
      console.log(this.studentform);
    }

  }


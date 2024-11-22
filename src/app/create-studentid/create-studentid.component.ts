import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentIdCardService } from '../student-id-card.service';

@Component({
  selector: 'app-create-studentid',
  templateUrl: './create-studentid.component.html',
  styleUrls: ['./create-studentid.component.css']
})
export class CreateStudentidComponent {

  constructor(private _studentid:StudentIdCardService){}


  public studentform:FormGroup=new FormGroup(
    {
      name: new FormControl(),
      phone: new FormControl(),
      city: new FormControl(),
      dob: new FormControl(),
      profile_picture: new FormControl(),
      email: new FormControl(),
      school_logo: new FormControl(),
      school_name: new FormControl(),
      school_city: new FormControl(),
      school_pin: new FormControl(),
  },
  );
  submit(){
    this._studentid.createStudentid(this.studentform.value).subscribe(
      (data:any)=>{
        alert("Craeted succesfully");
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }

}

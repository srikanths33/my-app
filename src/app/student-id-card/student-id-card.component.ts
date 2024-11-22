import { Component } from '@angular/core';
import { StudentIdCardService } from '../student-id-card.service';

@Component({
  selector: 'app-student-id-card',
  templateUrl: './student-id-card.component.html',
  styleUrls: ['./student-id-card.component.css']
})
export class StudentIdCardComponent {
  studentid:any=[];

  term:string="";
  column:string="";
  order:string="";

  constructor(private _studentid:StudentIdCardService){
    _studentid.getStudentid().subscribe(
      (data:any)=>{
        this.studentid=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }
  filter(){
    this._studentid.getFilteredstudentid(this.term).subscribe(
      (data:any)=>{
        this.studentid=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  sort(){
    this._studentid.getSortedstudentid(this.column,this.order).subscribe(
      (data:any)=>{
        this.studentid=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  delete(id:string){
    this._studentid.deleteStudentid(id).subscribe(
      (data:any)=>{
        alert("Deleted succesfully!!!");
        location.reload();
      },
      (err:any)=>{
        alert("Internal server error");

      }
    )

  }





  



}

import { Component } from '@angular/core';

@Component({
  selector: 'app-employye-registration',
  templateUrl: './employye-registration.component.html',
  styleUrls: ['./employye-registration.component.css']
})
export class EmployyeRegistrationComponent {

  empname:string="";
  role:string="";

  employees:any=[];
  

  add(){
    let employee={
      name:this.empname,
      role:this.role
    }

    this.employees.push(employee);
  }

}

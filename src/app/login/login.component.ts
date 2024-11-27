import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public loginform:FormGroup=new FormGroup(
    {
      email:new FormControl(),
      password:new FormControl(),

    })

    constructor(private _loginservice:LoginService){}

  login(){
    console.log(this.loginform);
    this._loginservice.login(this.loginform.value).subscribe(
      (data:any)=>{
        alert("login succesfull");
      },
      (err:any)=>{
        alert("Invalid credntials");
      }
    )
  }
}

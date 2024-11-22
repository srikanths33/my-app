import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  constructor(private _accountservice:AccountsService){}

  public accountsform:FormGroup = new FormGroup(
    {
      account_name: new FormControl(),
      available_balance: new FormControl(),
      account_number: new FormControl(),
      city: new FormControl(),
      profie_picture: new FormControl(),
  },
  );

  submit(){
    console.log(this.accountsform);

    this._accountservice.createAccounts(this.accountsform.value).subscribe(
      (data:any)=>{
        alert("created succesfully");
      },
      (err:any)=>{
        alert("creation failed");
      }

    );
    

  }




}

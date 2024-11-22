import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {

  accounts:any=[];

  term:string="";

  column:string="";
  order:string="";

  limit:number=0;
  page:number=0;

  constructor(private _accountsservice:AccountsService){

    _accountsservice.getAcconts().subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Inetrnal server error");
      }
    )
  }
  filter(){
    this._accountsservice.getFilterAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts=data
      },
      (err:any)=>{
        alert("Internal server Error")
      }
    )
  }
  sort(){
    this._accountsservice.getSortdAccounts(this.column,this.order).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("Inetrnal server error");
      }
    )
  }
  pagination(){
    this._accountsservice.getPagedAccounts(this.limit,this.page).subscribe(
      (data:any)=>{
        this.accounts=data;
      },
      (err:any)=>{
        alert("Inetrnal server error");
      } 
    )
  }

  delete(id:string){
    this._accountsservice.deleteAccount(id).subscribe(
      (data:any)=>{
        alert("Deleted succesfully")
        location.reload();
      },
      (err:any)=>{
        alert("Internal server erroe")
      }
    )
  }

}

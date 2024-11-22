import { Component } from '@angular/core';
import { SocialprofilesService } from '../socialprofiles.service';

@Component({
  selector: 'app-socialprofiles',
  templateUrl: './socialprofiles.component.html',
  styleUrls: ['./socialprofiles.component.css']
})
export class SocialprofilesComponent {
  profile:any=[];

  constructor(private _socialprofile:SocialprofilesService) {

    _socialprofile.getSocialprofiles().subscribe(
      (data:any)=>{
        this.profile=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }

    )
  }



}

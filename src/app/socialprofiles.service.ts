import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocialprofilesService {

  constructor(private _httpclient:HttpClient) { }

  getSocialprofiles():Observable<any>{
    return this._httpclient.get("https://dummyapi.online/api/social-profiles");
  }
}

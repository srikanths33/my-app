import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemanService {

  constructor(private _httpclient:HttpClient) { }

  getPokeman():Observable<any>{
    return this._httpclient.get("https://dummyapi.online/api/pokemon");
  }
}

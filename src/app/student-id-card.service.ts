import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentIdCardService {

  constructor(private _httpclient:HttpClient) { }

  getStudentid():Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }

  getFilteredstudentid(term:string):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);

  }

  getSortedstudentid(column:string,order:string):Observable<any>{
    return this._httpclient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+"&order="+order);
 }

 deleteStudentid(id:string):Observable<any>{
  return this._httpclient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
 }

 createStudentid(data:any):Observable<any>{
  return this._httpclient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/student",data);
 }


}

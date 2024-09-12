import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from 'datatype';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  userData(data:user): Observable<any>{
    return this.http.post('http://localhost:3000/user',data)
  }
  GetData(){
    return this.http.get ('http://localhost:3000/user')
  }

}

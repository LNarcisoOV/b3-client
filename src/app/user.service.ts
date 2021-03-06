import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "//localhost:8080/b3/user/";

  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<any>{
    return this.http.get(this.baseUrl+id);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(this.baseUrl, user);
  }
 
  updateUser(id: number, value: any): Observable<any> {
    return this.http.put(this.baseUrl+id, value);
  }
 
  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.baseUrl+id);
  }
 
  getUserList(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}

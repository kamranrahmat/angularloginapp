import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl:string="http://localhost:8081";
  constructor(private http:HttpClient) { }

  getDetail(){
    return this.http.get(`${this.baseUrl}/welcome`);
  }
}

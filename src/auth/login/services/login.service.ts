import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  lgoin(form:any){
    return this.http.post('https://stating-api.ranachat.com/auth/public/login',form)
  }
}

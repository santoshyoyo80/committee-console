import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiURL: string = "http://localhost:8081/api"

  constructor(private httpClient: HttpClient) { }


  register(formData: FormData) : Observable<any>{
    
    const URI = `${this.apiURL}/register`;
    console.log("AutService:: register() called..")
    console.log("Sending request to URL = "+ URI);
    console.log("Paylaod=", formData);
  
    return this.httpClient.post(`${this.apiURL}/register`, formData);
  }

  login(data: any) : Observable<any> {
    return this.httpClient.post('${this.apiURL}/login', data)
  }

  logOut() {
    localStorage.removeItem("token")
  }

  saveToken(token: string){
    localStorage.setItem("token", token);
  }

  getToke() : string | null {
    return localStorage.getItem("item");
  }


}

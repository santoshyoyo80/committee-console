import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly API_URL: string = "http://localhost:8081/api"

  constructor(private httpClient: HttpClient) { }

  login(data: any) : Observable<any> {
    const URI = `${this.API_URL}/login`;
    return this.httpClient.post(URI, data);
  }

  register(formData: FormData) : Observable<any>{
    const URI = `${this.API_URL}/register`;
    return this.httpClient.post(URI, formData);
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

import { Injectable, inject, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

const LOGIN_PATH = "auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  apiUrl: string = environment.apiUrl;
  isLogin = signal(false);

  constructor() { }

  isAuthenticated() {
    return this.isLogin;
  }

  login(credientals: any) {
    const body = {
      username: credientals.email,
      password:  credientals.password
    };
    return this.http.post(`${this.apiUrl}/${LOGIN_PATH}`, body).toPromise();
  }

  setUser() {
    this.isLogin.set(true);
  }
}

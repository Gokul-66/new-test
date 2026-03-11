import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api = 'http://localhost:3000/api/auth';

  constructor(private http : HttpClient) { }
  login(email: string, password: string) {
    return this.http.post(`${this.api}/login`, {email, password}).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
      })
    );
  }
  signup(name: string, email: string, password: string, address: string) {
    return this.http.post(`${this.api}/register`, {name, email, password, address});
  }


  isLoggedIn(): boolean {

    return !!localStorage.getItem('token');
  }

}

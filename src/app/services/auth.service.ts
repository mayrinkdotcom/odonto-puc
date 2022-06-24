import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../types/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
  ) { }

  isLogged(): boolean {
    return window.localStorage.getItem('userLogged') === 'true';
  }

  login(username: string, password: string) {
    const url = `${environment.BASE_URL}/login`;
    const headers = new HttpHeaders();
    const body = {
      email: username,
      password
    };
    try {
      return this.http.post<any>(url, body, { headers }).pipe(
        tap(res => {
          window.localStorage.setItem('userLogged', res.status);
          window.localStorage.setItem('user', JSON.stringify(res.user));
        })
      );
    } catch (error) {
      console.error('ERROR on AuthService', error);
    }
  }

  logout() {
    window.localStorage.clear();
  }

  getLoggedUser(): User {
    const user = window.localStorage.getItem('user');
    return JSON.parse(user);
  }

  register(params: any) {
    const url = `${environment.BASE_URL}/cadastro`;
    const body = params;

    return this.http.post<any>(url, body);
  }

  getUserPool() {
    const url = `${environment.BASE_URL}/users`;
    return this.http.get<any>(url);
  }

  updateUser(newAttr: User) {
    const URL = `${environment.BASE_URL}/admin/usuario/update`;
    const body = {...newAttr};
    return this.http.post<any>(URL, body);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequest} from '../models/requests/login-request';
import {environment} from '../../../environments/environment';
import {TokenResponse} from '../models/responses/token-response';
import {Observable} from 'rxjs';
import {RegisterUserRequest} from '../models/requests/register-user-request';
import {User} from '../models/entites/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  public login(request: LoginRequest): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(`${this.apiUrl}/login`, request);
  }

  public register(request: RegisterUserRequest): Observable<User>{
    return this.http.post<User>(`${this.apiUrl}/api/users`, request);
  }

  public authorize(token: string) {
    localStorage.setItem('token', token);
  }

  public clearAll() {
    localStorage.removeItem('token');
  }

  public checkAuthorized(): boolean {
    return !!localStorage.getItem('token');
  }

  public getToken(): string {
    return localStorage.getItem('token');
  }
}

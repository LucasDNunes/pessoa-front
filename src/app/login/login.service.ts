import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from './usuario-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  tokenUrl = 'http://localhost:8080/oauth/token';

  constructor(private http: HttpClient) { }

  logar(usuario: Usuario): Promise<any> {
    const body = this.getBody(usuario.username, usuario.password);
    const options = this.getOptions();
    return this.http.post(this.tokenUrl, body, options).toPromise();
  

  }

  getBody(username: string, password: string) {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('grant_type', 'password');
    urlSearchParams.append('client_id', 'pessoa-api');
    urlSearchParams.append('username', 'guest');
    urlSearchParams.append('password', 'guest');
    return urlSearchParams.toString();
  }

  getOptions() {
    const headersParams = { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' };
    headersParams['Authorization'] = 'Basic cGVzc29hLWFwaToxMjM=';
    return { headers: headersParams};
}


}

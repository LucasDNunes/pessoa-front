import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // usuarioUrl = 'http://localhost:8080/oauth/token';
  usuarioUrl = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  logar(usuario: Usuario): Promise<any> {
    return this.http.post(this.usuarioUrl + '/login', usuario).toPromise();
    
    // let formData = new FormData();
    // const formData = new URLSearchParams();
    // formData.append('grant_type', 'password');
    // formData.append('username', usuario.username);
    // formData.append('password', usuario.password);

    // let header = new HttpHeaders()
    // header.append('Content-Type', 'application/json');
    // header.append("Authorization", "Basic " + btoa("cliente:123"));

    // let teste = "grant_type=password&username="+usuario.username+"&password="+ usuario.password;

    // const headersParams = { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' };
    // headersParams['Authorization'] = "Basic " + btoa("cliente:123");
    // const httpOptions = {
    //   headers: headersParams
    // };

    // const headers = {
    //   'Authorization': 'Basic ' + btoa('client:123'),
    //   'Content-type': 'application/form-data'
    // }

    // let body_ = this.getBody(usuario.username, usuario.password);
    // const body = new HttpParams()
    //   .set('grant_type','password')
    //   .set('username', usuario.username)
    //   .set('password', usuario.password);


    // fetch(this.usuarioUrl, { 
    //   method: 'post', 
    //   headers: new Headers({
    //     'Authorization': 'Basic ' + btoa('client:123'),
    //     'Content-type': 'multipart/form-data'
    //   }),
    //   body: 'grant_type=password&username=' + usuario.username + 'password=' + usuario.password
    // });
    // debugger
    // return this.http.post(this.usuarioUrl, {
    //   headers: new Headers({
    //     'Authorization': 'Basic ' + btoa('client:123'),
    //     'Content-type': 'multipart/form-data'
    //   }),
    //   body: 'grant_type=password&username=' + usuario.username + 'password=' + usuario.password
    // }).toPromise();
  }

  getBody(username: string, password: string) {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append('grant_type', 'password');
    urlSearchParams.append('username', username);
    urlSearchParams.append('password', password);
    return urlSearchParams.toString();
}


}

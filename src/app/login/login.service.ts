import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from './usuario-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuarioUrl = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) { }

  logar(usuario: Usuario): Promise<any> {
    return this.http.post(this.usuarioUrl, usuario).toPromise();
  }

}

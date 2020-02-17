import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Pessoa } from './pessoa-model';

const pessoaUrl = 'http://localhost:8080/pessoas';
const sourceUrl = 'http://localhost:8080/source';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private http: HttpClient) { }

  listar():Promise<any> {
    return this.http.get<any>(pessoaUrl, this.getAutenticacao()).toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.http
      .delete(pessoaUrl + '/' + id, this.getAutenticacao())
      .toPromise()
      .then(() => null);
  }

  adicionar(pessoa: Pessoa): Promise<any> {
    return this.http.post(pessoaUrl, pessoa, this.getAutenticacao()).toPromise();
  }

  alterar(pessoa: Pessoa): Promise<any> {
    return this.http.put(pessoaUrl + '/' + pessoa.id, pessoa, this.getAutenticacao())
      .toPromise();
  }

  buscarPorCodigo(id: number): Promise<any> {
    return this.http.get<Pessoa>(pessoaUrl + '/' + id, this.getAutenticacao()).toPromise();
  }

  getGitHub(): Promise<any> {
    return this.http.get<any>(sourceUrl).toPromise();
  }

  getAutenticacao(): any{
    let token = this.getToken();
     return{ headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })}
  }

  getToken(): string {
    let user = 'user';
    if (localStorage.getItem(user) && localStorage.getItem(user) == 'guest1') {
      return 'Basic Z3Vlc3QxOmd1ZXN0MQ=='
    }
    return'Basic Z3Vlc3QyOmd1ZXN0Mg==';
  }
}
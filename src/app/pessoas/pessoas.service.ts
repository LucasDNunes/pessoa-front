import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Pessoa } from './pessoa-model';

const pessoaUrl = 'http://localhost:8080/pessoas';
const sourceUrl = 'http://localhost:8080/source';
@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private http: HttpClient) { }

  listar() {
    let headers = new Headers();
  headers.append('Access-Control-Allow-Origin', '*');
  // let options = new HttpRequest("GET", pessoaUrl, headers ); 
  // console.log(options) 
  // const requestOptions = { headers: new Headers(headers) };
  
  const headerDict = 
  { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type', };
  const requestOptions = { headers: new Headers(headerDict), }; 

  // return this.http.get(this.heroesUrl, requestOptions)
  // return options;
  // return this.http.get(this.url + 'album.get?album_id=' + album_id 
  // + '&apikey=' + this.apikey, options) .map(res => res.json())
    // return this.http.get<any>(pessoaUrl).toPromise();

    return this.http.get(pessoaUrl, requestOptions);
    
  }

  excluir(id: number): Promise<void> {
    return this.http
      .delete(pessoaUrl + '/' + id)
      .toPromise()
      .then(() => null);
  }

  adicionar(pessoa: Pessoa): Promise<any> {
    return this.http.post(pessoaUrl, pessoa).toPromise();
  }

  alterar(pessoa: Pessoa): Promise<any> {
    return this.http.put(pessoaUrl + '/' + pessoa.id, pessoa)
      .toPromise();
  }

  buscarPorCodigo(id: number): Promise<Pessoa> {
    return this.http.get<Pessoa>(pessoaUrl + '/' + id).toPromise();
  }

  getGitHub(): Promise<any> {
    return this.http.get<any>(sourceUrl).toPromise();
  }
}

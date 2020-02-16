import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pessoa } from './pessoa-model';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  pessoaUrl = 'http://localhost:8080/pessoas';
  sourceUrl = 'http://localhost:8080/source';

  constructor(private http: HttpClient) { }

  listar(): Promise<any> {
    return this.http.get<any>(this.pessoaUrl).toPromise();
  }

  excluir(id: number): Promise<void> {
    return this.http
      .delete(this.pessoaUrl + '/' + id)
      .toPromise()
      .then(() => null);
  }

  adicionar(pessoa: Pessoa): Promise<any> {
    return this.http.post(this.pessoaUrl, pessoa).toPromise();
  }

  alterar(pessoa: Pessoa): Promise<any> {
    return this.http.put(this.pessoaUrl + '/' + pessoa.id, pessoa)
      .toPromise();
  }

  buscarPorCodigo(id: number): Promise<Pessoa> {
    return this.http.get<Pessoa>(this.pessoaUrl + '/' + id).toPromise();
  }

  getGitHub(): Promise<any> {
    return this.http.get<any>(this.sourceUrl).toPromise();
  }
}

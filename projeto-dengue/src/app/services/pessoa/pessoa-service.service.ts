import { Pessoa } from './../../models/pessoa/pessoa';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PessoaServiceService
{

  constructor(private http: HttpClient) { }

  urlApiPessoa = `${environment.urlApi}/focos`;

  getPessoas()
  {
    return this.http.get<Pessoa[]>(this.urlApiPessoa);
  }

  getPessoaById(id: number)
  {
    return this.http.get<Pessoa>(`${this.urlApiPessoa}/${id}`);
  }

  postPessoa(pessoa: Pessoa)
  {
    return this.http.post<Pessoa>(this.urlApiPessoa, pessoa);
  }

  updatePessoa(foco: Pessoa)
  {
    return this.http.put<Pessoa>(this.urlApiPessoa, foco);
  }

  deletePessoa(id: number)
  {
    return this.http.delete<boolean>(`${this.urlApiPessoa}/${id}`);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { UsuarioModel } from '../model/UsuarioModel';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  logar (usuarioLogin: UsuarioLogin):  Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>("http://localhost:8080/usuarios/logar", usuarioLogin)

  }

  cadastrar(usuarioModel: UsuarioModel) : Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>("http://localhost:8080/usuarios/cadastrar", usuarioModel)
  }

  btnSair() {
    return localStorage.getItem('token') != null
  }
  btnLogin() {
    return localStorage.getItem('token') == null
  }



}

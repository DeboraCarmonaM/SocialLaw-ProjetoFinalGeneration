import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioModel } from '../model/UsuarioModel';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuarioModel: UsuarioModel = new UsuarioModel()
  senha!: string

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert : AlertasService

  ) { }

  ngOnInit() {
  }

  conferirSenha(event: any) {
    this.senha = event.target.value
  }

  cadastrar() {
    if ( this.senha === this.usuarioModel.senha ) {

      this.authService.cadastrar(this.usuarioModel).subscribe((resp: UsuarioModel) => {
        this.usuarioModel = resp})

        this.router.navigate(['/logar'])
        this.alert.showAlertSuccess('Usuário cadastrado com sucesso!')



    } else {
      this.alert.showAlertDanger('Suas senhas não conferem')
    }
  }

}

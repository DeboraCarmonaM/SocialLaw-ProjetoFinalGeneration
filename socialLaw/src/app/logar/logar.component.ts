import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './logar.component.html',
  styleUrls: ['./logar.component.css']
})
export class LogarComponent implements OnInit {

  UsuarioLogin: UsuarioLogin = new UsuarioLogin()


  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  entrar() {
    this.authService.logar(this.UsuarioLogin).subscribe((resp: UsuarioLogin) => {
      this.UsuarioLogin = resp
      localStorage.setItem('token', this.UsuarioLogin.token)
      this.router.navigate(['/feed'])


    })
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';

@Component({
  selector: 'app-navbar-superior',
  templateUrl: './navbar-superior.component.html',
  styleUrls: ['./navbar-superior.component.css']
})
export class NavbarSuperiorComponent implements OnInit {

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
  }

  sair() {
    this.router.navigate(['/logar'])
    localStorage.clear()
  }

}

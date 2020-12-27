import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TemaModel } from '../model/TemaModel';
import { AlertasService } from '../service/alertas.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-post-tema',
  templateUrl: './post-tema.component.html',
  styleUrls: ['./post-tema.component.css']
})
export class PostTemaComponent implements OnInit {

  tema: TemaModel = new TemaModel()
  listaTemas!: TemaModel[]
  idTema: number;

  constructor(
    private temaService: TemaService,
    private router: Router,
    private alert : AlertasService
  ) { }

  ngOnInit() {
    window.scroll(0,0);
    this.findAllTemas()
  }

  findAllTemas()
  {
    this.temaService.getAllTemas().subscribe((resp:TemaModel[])=> {this.listaTemas = resp})
  }

  findByIdTemas()
  {
    this.temaService.getByIdTema(this.idTema).subscribe((resp:TemaModel)=> {
      this.tema = resp
    })
  }

  cadastrar(){
    if (this.tema.nome == null) {
    this.alert.showAlertDanger('Preencha o campo de nome do tema corretamente')
    } else {
     this.temaService.postTema(this.tema).subscribe((resp: TemaModel) => {
       this.tema = resp
       this.router.navigate(['/feed'])
       this.alert.showAlertSuccess('Tema cadastrado com sucesso!')
     })
    }
  }


}

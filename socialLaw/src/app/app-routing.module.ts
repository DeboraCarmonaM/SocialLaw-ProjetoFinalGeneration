import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { DeletePostagemComponent } from './delete-postagem/delete-postagem.component';
import { FeedComponent } from './feed/feed.component';
import { HomeComponent } from './home/home.component';
import { LogarComponent } from './logar/logar.component';
import { PostTemaComponent } from './post-tema/post-tema.component';
import { PutTemaComponent } from './put-tema/put-tema.component';
import { DeleteTemaComponent } from './delete-tema/delete-tema.component';
import { PutPostagemComponent } from './put-postagem/put-postagem.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: "home", component: HomeComponent},
  {path: "feed", component: FeedComponent},
  {path: "logar", component:LogarComponent},
  {path: "cadastrar", component: CadastrarComponent},
  {path:"cadastro-tema", component: PostTemaComponent},
  {path:"editar-tema/:id", component: PutTemaComponent},
  {path:"delete-tema/:id", component: DeleteTemaComponent},
  {path: 'editar-post/:id', component: PutPostagemComponent}, /* AQUI */
  {path: 'delete-post/:id', component: DeletePostagemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

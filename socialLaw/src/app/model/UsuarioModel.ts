import { ComentarioModel } from './ComentarioModel'
import { PostagemModel } from './PostagemModel'

export class UsuarioModel {
    public Id_usuario!:number
    public nome!:string
    public foto!:string
    public usuario!:string
    public senha!:string
    public postagem!: PostagemModel[]
    public comentarios!: ComentarioModel[]
    
    }
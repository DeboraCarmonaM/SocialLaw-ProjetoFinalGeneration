import { ComentarioModel } from './ComentarioModel'
import { TemaModel } from './TemaModel'


export class PostagemModel {
    public id_postagem!: number
    public usuario!: string
    public tema!: TemaModel
    public artigo!: string
    public titulo!: string
    public data!: Date
    public comentarios!:ComentarioModel[]



}

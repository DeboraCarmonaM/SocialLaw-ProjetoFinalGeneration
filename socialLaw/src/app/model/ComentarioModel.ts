import { PostagemModel } from "./PostagemModel"

export class ComentarioModel {
    public id_comentario!: number
    public usuario!: string
    public postagem!: PostagemModel
    public artigo!: string
    public data!: Date
    public curtir!: string
}

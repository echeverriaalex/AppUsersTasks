import { ITask, IUser } from "./Interfaces";

export class User implements IUser{
    email: string | null;
    id: number | null;
    password: string | null;
    username: string | null;

    constructor(user?: any){
        this.id = user.id != null? user.id: null;
        this.username = user.username != null? user.username: null;
        this.email = user.email != null? user.email: null;
        this.password = user.password != null? user.password: null;
    }
}

export class Task implements ITask{
    id: string | null;
    idUser: string | null;
    title: string | null;
    description: string | null;

    constructor(task?: any){
        this.id = task.id != null? task.id: null;
        this.idUser = task.idUser != null? task.idUser: null;
        this.title = task.title != null? task.title: null;
        this.description = task.description != null? task.description: null;
    }
}
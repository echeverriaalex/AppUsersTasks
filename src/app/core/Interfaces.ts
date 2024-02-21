export interface IUser{
    id: number | null;
    username: string | null;
    email: string | null;
    password: string | null;
}

export interface ITask{
    id: string | null;
    idUser: string | null;
    title: string | null;
    description: string | null;
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, catchError, map, of } from 'rxjs';
import { Task, User } from '../models';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private baseURL: string = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseURL}/users`);
  }

  getUser(email:string, password:string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseURL}/users?email=${email}&password=${password}`);
  }

  registerUser(newUser: User): Observable<User>{    
    return this.http.post<User>(`${this.baseURL}/users`, newUser);
  }

  createTask(newTask: Task): Observable<Task>{    
    return this.http.post<Task>(`${this.baseURL}/tasks`, newTask);
  }

  getTasksByUser(idUser: string): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseURL}/tasks?idUser=${idUser}`);
  }

  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseURL}/tasks`);
  }

  deleteTask(idTask: string): Observable<boolean>{
    return this.http.delete<boolean>(`${this.baseURL}/tasks/${idTask}`)
      .pipe(
        map(resp => {return true}),
        catchError(error => of(false))
      );
  }

}
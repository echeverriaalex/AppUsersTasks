import { Injectable, OnInit } from '@angular/core';
import { Task } from 'src/app/core/models';
import { ApiService } from 'src/app/core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService implements OnInit{

  constructor(private apiService: ApiService) { }


  ngOnInit(): void { }


  saveTask(task: any): Promise<Task>{
    return new Promise<Task>((resolve, reject)=>{
      this.apiService.createTask(task).subscribe({
        next: (data) => resolve(data),
        error: (error) => reject(error)
      })
    })
  }


  getTaskListByUser(idUser: string): Promise<Task[]>{
    return new Promise<Task[]>((resolve, reject)=>{
      this.apiService.getTasksByUser(idUser).subscribe({
        next: (list) => resolve(list),
        error: (error) => reject(error)
      })
    })
  }

  deleteTask(idTask: string): Promise<boolean>{
    return new Promise<boolean>((resolve, reject)=>{
      this.apiService.deleteTask(idTask).subscribe({
        next: (data) => resolve(data),
        error: (error) => reject(error)
      })
    })
  }
}
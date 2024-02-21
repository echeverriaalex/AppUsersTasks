import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/core/models';
import { TasksService } from '../../services/tasks.service';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit{

  taskList: Array<Task> = []

  constructor(private taskService: TasksService, private apiService: ApiService){}

  ngOnInit(): void {
    
    
    this.getTaskListByUser()


    /*
    this.apiService.getTasksByUser(sessionStorage.getItem('User')!.toString()).subscribe({
      next: (list) => this.taskList,
      error: (error) => console.log(error);
      
    })
    */
  }

  getTaskListByUser(){
    let idUser = sessionStorage.getItem('User')!.toString()
    
    this.taskService.getTaskListByUser(idUser)
      .then((list) => this.taskList = list)
      .catch((error) => {
        console.log("Error to get tasklist")
        console.error(error);
        
      })
  }


  deleteTask(idTask: string){    
    this.taskService.deleteTask(idTask)
      .then((response) => {
        console.log("Tarea eliminada con exito");
        console.log(response);
        this.getTaskListByUser();
      })
      .catch((error) => {
        console.log("Error to get tasklist")
        console.error(error);
        
      })
  }


}
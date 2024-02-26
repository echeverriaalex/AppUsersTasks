import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit{

  task: FormGroup = this.fb.group({
    title: ["", Validators.required],
    description: ["", Validators.required]
  })

  constructor(private fb:FormBuilder, private taskService: TasksService){}


  ngOnInit(): void { }

  saveTask(){

    let task = {
      title: this.task.get('title')?.value,
      description: this.task.get('description')?.value,
      idUser: sessionStorage.getItem('User')
    }
    
    //console.log("Id user session ---> " + task.idUser);

    this.taskService.saveTask(task)
      .then((data) => {
        console.log("task created");        
        console.log(data)
      })
      .catch((error) => {
        console.log("Error to create task");        
        console.log(error)
      })

    this.task.reset();
  }

}

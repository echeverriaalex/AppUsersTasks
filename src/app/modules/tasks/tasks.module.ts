import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminTaskComponent } from './components/admin-task/admin-task.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AddTaskComponent,
    ListTaskComponent,
    AdminTaskComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    AddTaskComponent,
    ListTaskComponent,
    AdminTaskComponent
  ]
})
export class TasksModule { }

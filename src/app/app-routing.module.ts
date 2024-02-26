import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/components/error404/error404.component';

const routes: Routes = [
  {path: 'auth', loadChildren: ()=> import("./modules/auth/auth.module").then(m => m.AuthModule)},
  {path: 'home', loadChildren: ()=> import("./modules/home/home.module").then(m => m.HomeModule)},
  {path: 'tasks', loadChildren: ()=> import("./modules/tasks/tasks.module").then(m => m.TasksModule)},
  {path: '', loadChildren: ()=> import("./modules/welcome/welcome.module").then(m => m.WelcomeModule)},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

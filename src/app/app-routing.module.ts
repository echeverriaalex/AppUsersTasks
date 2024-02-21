import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './modules/landing/landing.component';
import { Error404Component } from './shared/components/error404/error404.component';

const routes: Routes = [
  {path: 'auth', loadChildren: ()=> import("./modules/auth/auth.module").then(m => m.AuthModule)},
  {path: 'main', loadChildren: ()=> import("./modules/main/main.module").then(m => m.MainModule)},
  {path: 'tasks', loadChildren: ()=> import("./modules/tasks/tasks.module").then(m => m.TasksModule)},
  {path: '', component: LandingComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

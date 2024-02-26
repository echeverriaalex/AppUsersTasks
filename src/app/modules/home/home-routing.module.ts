import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from 'src/app/shared/components/error404/error404.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

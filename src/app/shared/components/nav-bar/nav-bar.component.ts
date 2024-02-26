import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{

  idUser = sessionStorage.getItem('User');

  constructor(){ }

  ngOnInit(): void { }

  logOut(){

    sessionStorage.clear();
    //sessionStorage.setItem('username', null);
  }


}

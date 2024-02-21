import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usersList: Array<User> = [];

  login: FormGroup = this.fb.group({
    email: ["", Validators.required],
    password: ["", Validators.required]
  })

  constructor(private userService: UsersService, 
    private fb: FormBuilder,
    private router: Router){ }

  ngOnInit(): void { }

  getListUsers(){
    this.userService.getUsers()
      .then((users) => {
        this.usersList = users
        console.log(this.usersList); 
      })
      .catch((error) => {
        console.error("Error to get Users --> ")
        console.error(error);
      })
  }

  startSession(){
    let email = this.login.get('email')?.value
    let password = this.login.get('password')?.value
    //console.log("Email ==> " + email);
    //console.log("Passw ==> " + password);

    this.userService.getUser(email, password)
      .then((res)=>{
        console.log(res);
        console.log("Welcome you started session succesfull");
        sessionStorage.setItem('User', res[0].id!.toString());
        this.router.navigate(['main']);
      })
      .catch((error)=>{
        console.error(error);        
      })



  }

}

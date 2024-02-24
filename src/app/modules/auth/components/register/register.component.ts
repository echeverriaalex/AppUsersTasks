import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  register: FormGroup = this.fb.group({
    username: ["", Validators.required],
    email: ["", Validators.required],
    password: ["", Validators.required],
    repeatPassword: ["", Validators.required]
  })

  constructor(private userService: UsersService, private fb: FormBuilder){}

  showPassword(){
    let password = document.getElementById('password')
    password?.setAttribute("type", "text");

    if(password)


    console.log(password)
  }

  registerUser(){

    if(this.register.invalid) return
    else{
      if(this.register.get('password')?.value === this.register.get('repeatPassword')?.value){
      
        let user = {
          username: this.register.get('username')?.value,
          email: this.register.get('email')?.value,
          password: this.register.get('password')?.value
        }

        this.userService.registerUser(user)
          .then((result) => {
            console.log("Usernew -> ")
            console.log(result);
            
          })
          .catch((error) => {
            console.error("Error to register --> ")
            console.error(error);        
          })
      }
      else{
        console.error("Error to verify the passwords, try again");
      }
    }
  }

}

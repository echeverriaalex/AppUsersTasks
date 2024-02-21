import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { User } from 'src/app/core/models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    
  }

  getUsers(): Promise<User[]>{
    return new Promise<User[]>((resolve, reject) =>{
      this.apiService.getUsers().subscribe({
        next: (data) => {
          resolve(data)
        },
        error: (error) => {
          reject(error)
        }
      })
    });
  }

  getUser(email: string, password: string): Promise<User[]>{
    return new Promise<User[]>((resolve, reject) =>{
      this.apiService.getUser(email, password).subscribe({
        next: (data) => {
          resolve(data)
        },
        error: (error) => {
          reject(error)
        }
      })
    });
  }

  registerUser(newUser: any): Promise<User>{
    return new Promise<User>((resolve, reject) =>{
      this.apiService.registerUser(newUser).subscribe({
        next: (data) => {
          resolve(data)
        },
        error: (error) => {
          reject(error)
        }
      })
    });
  }
}

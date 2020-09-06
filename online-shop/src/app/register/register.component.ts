import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: User[] = [] ;
  errorMessage: string;
  constructor() { }

  ngOnInit() {
    this.errorMessage = '';
  }
  addUser(firstName: string , lastName: string, phonNumber: string, password: string): void{
    this.errorMessage = '';
    const user: User = { id: -1 , firstName: '' , lastName: '' , phoneNumber: '' , password: ''};
    user.firstName = firstName;
    user.lastName = lastName;
    user.phoneNumber = phonNumber;
    user.password = password;
    user.id = this.users.length;
    if (user.firstName !== '' && user.lastName !== '' && user.phoneNumber !== '' && user.password !== ''){
      this.users.push(user);
    }
    else{
      this.errorMessage = '!لطفا همه فیلدها را پر کنید';
    }

  }

}

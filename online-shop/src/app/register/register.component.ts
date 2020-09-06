import { User } from './../user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: User[] = [{id:0 , firstName:'faeze' , lastName:'kesh', password:'1234' , phoneNumber:'1234567'}];
  constructor() { }

  ngOnInit() {
  }
  addUser(firstName: string , lastName: string, phonNumber: string, password: string):void{
    const user: User = { id: -1 , firstName: '' , lastName: '' , phoneNumber: '' , password: ''};
    user.firstName = firstName;
    user.lastName = lastName;
    user.phoneNumber = phonNumber;
    user.password = password;
    user.id = this.users.length;
    if (user){
      this.users.push(user);
    }

  }

}

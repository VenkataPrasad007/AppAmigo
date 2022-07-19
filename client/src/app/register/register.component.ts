import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Input() usersFromHomeComponent: any;
@Output() cancelRegister = new EventEmitter();
  model: any={};
  constructor(private accService: AccountService) { }

  ngOnInit(): void {
  }
  register(){
    this.accService.register(this.model).subscribe(res =>{
      alert("User registered successfully.")
      this.cancel();
    },
    err => {console.error(err)}
    )
  }
cancel(){
  this.cancelRegister.emit(false)
  console.log('Cancelled');
}
}

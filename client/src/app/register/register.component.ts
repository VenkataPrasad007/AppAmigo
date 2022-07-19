import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Output() cancelRegister = new EventEmitter();
  model: any={};
  constructor(private accService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  register(){
    this.accService.register(this.model).subscribe(res =>{
      alert("User registered successfully.")
      this.cancel();
    },
    err => {console.error(err); this.toastr.error(err.error)}
    )
  }
cancel(){
  this.cancelRegister.emit(false)
  console.log('Cancelled');
}
}

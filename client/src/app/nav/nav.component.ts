import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any ={};
  loggedIn : boolean;

  constructor(public accService: AccountService) { }

  ngOnInit(): void {
    
  }
  login(){
    this.accService.login(this.model).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }
  logout(){
    this.accService.logout();
  }


}

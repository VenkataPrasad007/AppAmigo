import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AppAmigo';
users: any;
  constructor(private accSvc: AccountService){}
  ngOnInit(): void {
    
      this.setCurrentUser();
  }
  setCurrentUser(){
    const user = JSON.parse(localStorage.getItem('user'));
    this.accSvc.setCurrentUser(user);
  }
  
}

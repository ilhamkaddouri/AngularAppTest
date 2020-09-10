import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../core/services/auth.service'
import { Router } from '@angular/router';
import {AccountService} from '../../../core/services/account.service'
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private authService:AuthService,private route:Router,private accountService:AccountService) { }

  ngOnInit(): void {
    this.__getUsers();
  }
  logOut(){
    this.authService.logUserOut();
    this.route.navigateByUrl('/auth/login')
  }
  __getUsers(){
    this.accountService.getUsers().subscribe(
      users=>{
        console.log(users);
      },error=>{
        console.log(error)
      }
    );
  }

}

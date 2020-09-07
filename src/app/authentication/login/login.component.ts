import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from './../../core/services/auth.service'
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:Router, private authService:AuthService) { }
  
  ngOnInit(): void {
  }
  login(){
    this.authService.logUserIn();
    this.route.navigateByUrl('/account/account1');

  }
  

}

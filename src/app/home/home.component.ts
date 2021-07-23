import { Router, RouterModule, Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // setting login form fields
  loginForm = new FormGroup({
    user_email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private titleService: Title, public router:Router) { 
    
  }

  ngOnInit(): void {
    this.titleService.setTitle("Login")
  }

}

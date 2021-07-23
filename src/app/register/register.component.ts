import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm = new FormGroup({
    first_name: new FormControl('', Validators.required)
  }))
  constructor() { }

  ngOnInit(): void {
  }

}

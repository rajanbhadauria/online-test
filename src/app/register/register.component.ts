import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  confirmEquals(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null =>  
        control.value?.toLowerCase() === this.passwordValue.toLowerCase() 
            ? null : {noMatch: true};
  }

  get passwordValue() {
    return this.password.value;
  }

  signupForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirm_password: new FormControl('', [Validators.required, Validators.confirmEquals])
  }))
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
  FormBuilder,
} from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {

  is_password_matched:boolean = false;

  signupForm:FormGroup = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name:  new FormControl('', Validators.required),
    email:  new FormControl('', [Validators.required, Validators.email]),
    password:  new FormControl('', Validators.required),
    confirm_password:  new FormControl('', [Validators.required]),
  },{validators: this.match_password});

  match_password(FC: FormGroup) {
    if(FC.value.confirm_password == '') {
      return null
    }
    FC.value.password === FC.value.confirm_password ? "" : FC.get('confirm_password').setErrors({match_password: true});
    return FC.value.password === FC.value.confirm_password ? null : {match_password: true}

  }
 
  constructor(private fb: FormBuilder, private registerService: RegisterService) {}

  saveUser() {
    this.registerService.saveUser(this.signupForm.value);
    
  }


  ngOnInit(): void {}
}

import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mobile:string;
  firstName:string;
  lastName:string;
  fnamepattern="^(A-Za-z){8,15}$";
  lnamepattern="^(A-Za-z){8,15}$";
  mob="^(0-9){10}$";
  registerForm: FormGroup;
  submitted= false;

  constructor(private formBuilder: FormBuilder){
    this.registerForm = this.formBuilder.group({
      firstName:["",[Validators.required,Validators.pattern(this.fnamepattern)]],
      lastName:["",[Validators.required,Validators.pattern(this.lnamepattern)]],
      mobile:["",[Validators.required,Validators.pattern(this.mob)]]
    });
  }
  get f(){
    return this.registerForm.controls;
  }
  onSubmit(data){
    this.submitted=true;
    if(this.registerForm.invalid)
      return;
    this.firstName=data.firstName;
    this.lastName=data.lastName;
  }
}

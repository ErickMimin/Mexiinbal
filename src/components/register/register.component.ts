import { Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { User } from '../../models/user';

import { PasswordValidation } from '../../validations/password-validation';
import { NoSpaceValidator } from '../../validations/nospace'
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  form : FormGroup;
  user :User = new User();
  terms :any;
  constructor(private _fb : FormBuilder,
              private _register :RegisterService){}
  ngOnInit(){
   this.buildForm();
   this._register.getTermCon().subscribe(data => {
     this.terms =data ;
   });
   
  }
  buildForm():void{
    this.form = this._fb.group({
        user : [null,[Validators.required,Validators.maxLength(20),NoSpaceValidator]],
        email :[null,[Validators.required,Validators.email]],
        accept : [null,[Validators.requiredTrue]],
        passwords: this._fb.group({
          'pass': [null, [Validators.required,Validators.minLength(8),NoSpaceValidator]],
          'conPass': [null, [Validators.required]]
        }, {
            validator: PasswordValidation.MatchPassword
        })
      });
      this.form.valueChanges.subscribe( data => {
        this.user.setData({
          user : data.user,
          email : data.email,
          pass : data.passwords.pass
        });
      });
  }
  toogleCheck(flag:boolean){
    this.form.get('accept').setValue(flag);  
  }
  print():void{
    console.log(this.user,this.form);
  }
}
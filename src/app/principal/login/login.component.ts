import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private formBuilder: FormBuilder, private autenticacion: AutenticacionService, private router: Router){}
    
  redireccion = '';

  login(){
    this.autenticacion.login();
    this.redireccion = this.autenticacion.urlUsuarioIntentaAcceder;
    this.autenticacion.urlUsuarioIntentaAcceder = '';
    this.router.navigate(['/home']);
  }
  
    // Angular Material
    hide = true;

  registroForm = this.formBuilder.group({
    username: ['', {validators:[Validators.required,Validators.pattern('[a-zA-ZñÑá-úÁ-Ú ]*'), Validators.minLength(4)]}],
    password: ['', {validators:[Validators.required, Validators.minLength(4)]}],
  });

  get username(){return this.registroForm.get('username');}
  get password(){return this.registroForm.get('password');}

}

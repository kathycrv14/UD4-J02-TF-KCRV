import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/models/users';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  userService: any;
  lista: Users[] =[{id: '', name: '', username:'', email:'', phone:'', website:''}];

  constructor(private formBuilder: FormBuilder ,private autenticacion: AutenticacionService, private router: Router,private dialogo: MatDialog){}
    
  redireccion = '';
  
  enviar(){
    this.dialogo
    .open(DialogComponent)
  }

  // Angular Material
  hide = true;

  registroForm = this.formBuilder.group({
    nombre: ['', {validators:[Validators.required, Validators.pattern('[a-zA-ZñÑá-úÁ-Ú ]*')]}],
    email: ['', {validators:[Validators.required]}],
    mensaje: ['', {validators:[Validators.required]}],
  });

  get nombre(){return this.registroForm.get('nombre');}
  get email(){return this.registroForm.get('email');}
  get mensaje(){return this.registroForm.get('mensaje');}

}

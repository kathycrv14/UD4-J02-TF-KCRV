import { Component } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  constructor(private userService: UserserviceService){}

  lista = new Array();

  ngOnInit(){
    this.userService.getUsersAllInterceptor().subscribe({
      next: (response: any) => {this.lista = response.body; console.log(response)},
      error: (e) => console.error(e),
      complete: () => console.info("La API devolvio todos los registros")
    });
  }
}

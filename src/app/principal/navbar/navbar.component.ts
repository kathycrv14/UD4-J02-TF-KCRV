import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  usuarioLogueado = false;

  constructor(private breakpointObserver: BreakpointObserver, public autenticacion: AutenticacionService) {}

  ngOnInit(){
    this.usuarioLogueado = this.autenticacion.isLoggedIn('');
    this.autenticacion.changeLoginStatus$.subscribe(
    (loggedSatus: boolean) => this.usuarioLogueado = loggedSatus
    );
  }

  logout(){
    this.autenticacion.logout();
  }
}

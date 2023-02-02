import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http: HttpClient) { }

  apiUser = environment.apiURL + 'users/';

  // Metodo GET para el Interceptor
  getUsersAllInterceptor():Observable<any>{
      return this.http.get(this.apiUser, {observe: 'response'});
  }
}

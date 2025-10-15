import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {
 /*  constructor(private readonly http: HttpClient){} */
 private readonly http = inject(HttpClient);

 isAuth$ = new BehaviorSubject(true);



  login(credentials: {email:string, password: string}){
    return this.http.post('https://my-json-server.typicode.com/JoaoGoncalves/hrms-api/auth/login', credentials).pipe(
      tap( () => this.isAuth$.next(true))
    )
  }

  logout(){
    return this.http.post('https://my-json-server.typicode.com/JoaoGoncalves/hrms-api/auth/logout', {}).pipe(
      tap( () => this.isAuth$.next(false))
    )
  }
}

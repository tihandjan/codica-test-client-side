import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators/catchError';
declare var Materialize;
@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
      private router: Router,
      private auth: AuthService
  ) { }

  canActivate() {
    return this.auth.validateUser().pipe(
      map(res => {
        if (res.json().data.id === 1) {  
          return true;
        }
      }),
      catchError(err => {
        this.router.navigate(['admin', 'login'])
        return Observable.of(false);
      })
    )
  }
}
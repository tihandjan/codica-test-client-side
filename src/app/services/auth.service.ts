import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token'
import { Subject, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators/map';
import { User } from '../models/user'
import { Response, RequestOptions, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
// import { Store } from '@ngrx/store';
// import * as fromRoot from '../redux/reducers/index';
// import * as actions from '../redux/actions/auth';
import { environment } from '../../environments/environment';
declare var Materialize;

@Injectable()
export class AuthService {

  constructor(
    private auth: Angular2TokenService,
    // private store: Store<fromRoot.State>
  ) {
    this.auth.init(environment.auth_routes);
    this.auth.validateToken().subscribe(res => {
      console.log('verrv')
      if (res.status === 200) {
        // this.store.dispatch(new actions.Auth()) ;
        // this.store.dispatch(new actions.GetCurrentUser(res.json().data));
      } else {
        // this.store.dispatch(new actions.UnAuth());
      }
    })
  }

  userSignedIn(): boolean {
    return this.auth.userSignedIn();
  }

  signUp(user):Observable<Response> {
    return this.auth.registerAccount(user).pipe(
        map(res => {
          let data = res.json().data;
          return data;
      })
    )
  }

  signIn(user: {email: string, password: string}): Observable<Response> {
    return this.auth.signIn(user).pipe(
      map(
        res => {
          let data = res.json().data;         
          return res.json().data;
        }
    ))
  }

  signOut(): Observable<Response> {
    Materialize.toast('Hope to see you soon :)', 3000, 'red rounded');    
    return this.auth.signOut().pipe(
      map(
        res => {
          return res;
        }
    ))
  }

  get headers() {
    const tokens = {
        accessToken: this.auth.currentAuthData['accessToken'] || null,
        client: this.auth.currentAuthData['client'] || null,
        uid: this.auth.currentAuthData['uid'] || null,
        expiry: this.auth.currentAuthData['expiry'] || null,
        tokenType: this.auth.currentAuthData['tokenType'] || null,
    }
    const headers = new Headers();
    headers.append('Accept','application/json'); 
    headers.append('access-token', tokens.accessToken); 
    headers.append('client', tokens.client); 
    headers.append('uid', tokens.uid); 
    headers.append('expiry', tokens.expiry); 
    headers.append('token-type', tokens.tokenType);
    headers.append('content-type', 'application/json');
    return new RequestOptions({headers: headers});
  }

  isUserAdmin(): boolean {
      return true;
  }


}

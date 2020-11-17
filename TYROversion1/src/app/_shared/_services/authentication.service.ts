import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from 'src/app/_shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {

    //     console.log("In AuthenticationService");

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    const loginData = { email: username, password: password };
    console.log("Post Data: " + loginData);

    return this.http.post<any>('https://torvalds-nodejs-tyro.herokuapp.com/login/', loginData)
      .pipe(map(user => {
        if(JSON.stringify(user).includes('token')){
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }
        else{
          throw new Error(user.error.message)
        }
      // },
      //   error => {
      //     return error;
        }))
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  signUp(username: string, email: string, password: string) {
    const signupData = { name: username, email: email, password: password };
    console.log("Signup Data: " + signupData);

    return this.http.post<any>('https://torvalds-nodejs-tyro.herokuapp.com/register/', signupData)
      .pipe(map(user => {
        if(JSON.stringify(user).includes('token')){
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        }
        else{
          throw new Error(user.error.message)
        }
      // },
      //   error => {
      //     // console.log("In error in map pipe " + error);
      //     return error;
        }))
  }
}
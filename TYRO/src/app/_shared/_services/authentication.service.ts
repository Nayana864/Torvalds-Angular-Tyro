import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() {

    console.log("In AuthenticationService");
  }

  login() {
  }

  logout() {
  }
}

import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private isLoggedIn: boolean = true;

    constructor() {
    }

    // fake auth method
    isAuthenticated() {
        const promise = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.isLoggedIn)
                }, 1000)
            }
        );
        return promise;
    }

  getAuthorizationToken():string {
     // fake token
      const token: string = "31b12vqdlvjsi0d5atq3p38s2sjjde2r";
      return token;
  }

    login() {
        this.isLoggedIn = true;
    }

    logout() {
        this.isLoggedIn = false;
    }

}

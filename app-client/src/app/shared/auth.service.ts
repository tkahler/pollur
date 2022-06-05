import {Injectable} from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable()
export class AuthService{

  public username: string;
  private userId: string;
  public userAuthenticated: boolean;

  constructor() {
    const token = localStorage.getItem('token');

    let tokenValid = false;
    if (token !== null) {
      const decodedToken = this.decodeAccessToken(token);
      const tokenExpired = this.tokenIsExpired(decodedToken);
      if (!tokenExpired) {
        this.setUserAuthenticated(true, decodedToken);
        tokenValid = true;
      }
    }

    if (!tokenValid) {
      this.setUserAuthenticated(false, token);
    }
  }

  setUserAuthenticated(isAuthenticated: boolean, decodedToken) {
    this.userAuthenticated = isAuthenticated;
    if (!isAuthenticated) {
      this.userId = null;
      this.username = null;
      localStorage.removeItem('token');
    } else {
      this.username = decodedToken.sub;
      this.userId = decodedToken.userId;
    }
  }

  getAuthToken(): string {
    return localStorage.getItem('token');
  }

  setAuthToken(token: string) {
    localStorage.setItem('token', token);
    const decodedToken = this.decodeAccessToken(token);
    this.setUserAuthenticated(true, decodedToken);
  }

  tokenIsExpired(decodedToken) {
    return (Math.floor((new Date()).getTime() / 1000)) >= decodedToken.exp;
  }

  private decodeAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }


}

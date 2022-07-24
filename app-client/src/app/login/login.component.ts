import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {ModalService} from '../shared/modal.service';
import {ModalDirective} from 'angular-bootstrap-md';
import {Auth} from '../models/auth';
import {LoginService} from './login.service';
import {AuthService} from '../shared/auth.service';
import {UserService} from '../shared/user.service';
import {ModalComponent} from '../shared/modal.component';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../app.component.css']
})
export class LoginComponent implements AfterViewInit, ModalComponent {
  public static modalId = 'loginModal';

  public isLogin = true;
  public refreshOnSuccessfulLogin = false;

  public authData: Auth = new Auth();
  public errorMsg: string;

  @ViewChild('loginModal') modalDirective: ModalDirective;

  constructor(private modalService: ModalService, private loginService: LoginService, private authService: AuthService,
              private userService: UserService) {
  }

  ngAfterViewInit() {
    this.modalService.register(LoginComponent.modalId, this);
  }

  login() {
    this.loginService.login(this.authData.username, this.authData.password).subscribe(token => {
      this.authService.setAuthToken(token);
      this.modalDirective.hide();
      if (this.refreshOnSuccessfulLogin) {
        location.reload();
      }
    }, () => {
      this.errorMsg = 'Username or Password was incorrect';
    });
  }

  signUp() {
    this.userService.createUser(this.authData).subscribe(res => {
      this.login();
    }, error => {
      if (error.status === 409) {
        this.errorMsg = 'Account with this Username already exists';
      }
    });
  }

  submit() {
    if (this.isLogin) {
      this.login();
    } else {
      this.signUp();
    }
  }

  // toggle modal from log in <-> sign up
  toggleModalType() {
    this.isLogin = !this.isLogin;
  }
}

import {Component} from '@angular/core';
import {AuthService} from '../shared/auth.service';
import {ModalService} from '../shared/modal.service';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../app.component.css'],
})

export class HeaderComponent {


  constructor(public authService: AuthService, private modalService: ModalService) {
  }

  logout() {
    this.authService.setUserAuthenticated(false, '');
  }

  login() {
    this.modalService.open(LoginComponent.modalId, {isLogin: true, refreshOnSuccessfulLogin: true});
  }

  signUp() {
    this.modalService.open(LoginComponent.modalId, {isLogin: false, refreshOnSuccessfulLogin: true});
  }
}

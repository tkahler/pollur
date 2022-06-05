import {Component, Injectable} from '@angular/core';
import {MDBModalService, ModalDirective} from 'angular-bootstrap-md';
import {ModalComponent} from './modal.component';

@Injectable()
export class ModalService {
  idToModal: Map<string, ModalComponent>;

  constructor() {
    this.idToModal = new Map<string, ModalComponent>();
  }

  register(modalId: string, modal: ModalComponent) {

    this.idToModal.set(modalId, modal);
  }

  open(modalId: string, data = null) {
    if (this.idToModal.has(modalId)) {
      const modalComponent = this.idToModal.get(modalId);
      if (data) {
        Object.keys(data).forEach(key => modalComponent[key] = data[key]);
      }

      modalComponent.modalDirective.show();
    }
  }

  close(modalId: string) {
    if (this.idToModal.has(modalId)) {
      this.idToModal.get(modalId).modalDirective.hide();
    }
  }
}

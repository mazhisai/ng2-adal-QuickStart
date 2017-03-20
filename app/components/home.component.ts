import {Component} from '@angular/core';
import { AdalService } from "ng2-adal-popup-fork/services/adal.service";

@Component({
  selector: 'home',
  template: '<div protected><h1>This is the dashboard page for {{this.adalService.userInfo.userName}}.</h1><button (click)="logOut()">Logout</button></div>'
})
export class HomeComponent {

  constructor(
    private adalService: AdalService
  ) {
    console.log('Entering home');
  }

  public logOut() {
    this.adalService.logOut();
  }
}

import { Component, OnInit } from '@angular/core';
import { SecretService } from "../services/secret.service";
import { AdalService } from "ng2-adal-popup-fork/services/adal.service";
import { OAuthData } from "ng2-adal-popup-fork/services/oauthdata.model"
import { Router } from "@angular/router";
import { NgSwitch } from '@angular/common';

@Component({
  selector: 'my-app',
  template: `    <div [ngSwitch]="userInfo && userInfo.isAuthenticated && isTopFrame">
            <div *ngSwitchCase="true"> {{'Authenticated the user ' + userInfo.userName}}</div>
            <p *ngSwitchCase="false">{{userInfo.loginError || 'Authenticating...'}}</p>
             <div><router-outlet></router-outlet></div>
        </div>
      `
})
export class AppComponent implements OnInit {
  private userInfo: OAuthData;

  ngOnInit(): void {
    this.adalService.handleWindowCallback();
    this.adalService.getUser();
  }
  constructor(
    private adalService: AdalService,
    private secretService: SecretService,
    private router: Router
  ) {
    let adalConfig: any = {
      tenant: this.secretService.adalConfig.tenant,
      clientId: this.secretService.adalConfig.clientId, expireOffsetSeconds: 600,
      redirectUri: window.location.origin + '/',
      postLogoutRedirectUri: window.location.origin + '/',
      popUp: true,
      cacheLocation: "localStorage"
    };

    adalConfig.callback = () => {
      console.log('Callback called');
      this.adalService.refreshDataFromCache();
      debugger;
      if (!(adalService.userInfo && adalService.userInfo.isAuthenticated)) {
        console.log('User not authenticated inside callback');
      } else {
        this.userInfo = this.adalService.userInfo;
        this.router.navigate(['/home']);
      }
    };

    this.adalService.init(adalConfig);

    if (!!this.adalService.userInfo && this.adalService.userInfo.isAuthenticated) {
      this.userInfo = this.adalService.userInfo;
    } else {
      this.adalService.login();
    }
  }
}

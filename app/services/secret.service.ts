import {Injectable} from '@angular/core';

@Injectable()
export class SecretService {
  public get adalConfig(): adal.Config {
    return {
      tenant: "<tenantId>",
      clientId: "<clientId>",
      redirectUri: window.location.origin + '/',
      postLogoutRedirectUri: window.location.origin + '/',
      popUp: true
    };
  }
}

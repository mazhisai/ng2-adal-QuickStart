It was quite difficult to find a working sample for an angular2 app that has working pop-up solution. so i decided to put together one. Its a fork from @ranveeraggarwal's quickStart app. This uses https://www.npmjs.com/package/ng2-adal-popup-fork package. This pacakge was created from https://github.com/mazhisai/angular2-adal. This repo is a fork on top of @corfor repo. i have a pending PR, once it makes it way into https://github.com/sureshchahal/angular2-adal, i will update the samples accordingly.

Credits:
@ranveeraggarwal - changes are on top of the app he created https://github.com/ranveeraggarwal/ng2-adal-QuickStart
@slubowsky for helping with his suggestions - https://github.com/sureshchahal/angular2-adal/issues/25
@corfor and @sureshchahal - the solution works based on a patch i created on top of ng2-adal library and @corfor's changes.

## How to use
1. Update app/services/secret.service.ts and add your  tenant and client ID.
2. Run `npm install`
3. Run `npm start`

And that's pretty much it.

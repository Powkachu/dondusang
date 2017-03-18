import { Component } from '@angular/core';

import { NeedsComponent } from '../needs/needs.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  connected : boolean = false;

  tab1Root: any = NeedsComponent;
  tab2Root: any = SignUpComponent;

  constructor() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user != null)
    {
      this.connected = true;
    }
  }
}

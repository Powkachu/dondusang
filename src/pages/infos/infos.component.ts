import { Component }       from '@angular/core';
import { OnInit }          from '@angular/core';


import { NavController }   from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { NeedsComponent }  from '../needs/needs.component';
import { BadgesComponent } from '../badges/badges.component';
import { SignUpComponent } from '../sign-up/sign-up.component';

@Component({
  selector: 'infos',
  templateUrl: 'infos.html',
})

export class InfosComponent
{
  constructor
  (
    private navController: NavController
  ) { }

  redirect(component : string) : void {
    switch(component) {
      case 'infos':
        break;
      case 'needs':
        this.navController.push(NeedsComponent);
        break;
      case 'badge':
        this.navController.push(BadgesComponent);
        break;
    }
  }

  disconnect() : void {
    localStorage.removeItem("user");
    this.navController.push(SignUpComponent);

  }
}


import { Component }       from '@angular/core';


import { NavController }   from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { NeedsComponent }  from '../needs/needs.component';
import { BadgesComponent } from '../badges/badges.component';


@Component({
  selector: 'achievement',
  templateUrl: 'achievement.html',
})
export class AchievementComponent
{
  constructor
  (
    private toastCtrl: ToastController,
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
 }

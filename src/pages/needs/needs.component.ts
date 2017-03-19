import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { NeedsService } from './needs.service';
import { User } from '../../models/user';
<<<<<<< HEAD
import { BadgesComponent} from '../badges/badges.component';
import { MapComponent } from '../map/map.component';
=======
import { BadgesComponent } from '../badges/badges.component';
import { AchievementComponent } from '../achievement/achievement.component';
>>>>>>> 8ff8e2d3f6d8dd1fc59d60c712a468b21f8a058d

@Component({
  selector: 'needs',
  templateUrl: 'needs.html'
})
export class NeedsComponent {

  user : User = null;
  avg  : number = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private needsService: NeedsService,
    private navController: NavController
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.needsService.getAvg('France', 'Strasbourg', this.user.rhesus).subscribe(
        res =>
        {
          this.avg = res.mean;
        },
        err =>
        {

        }
    );
  }

  redirect(component : string) : void {
    switch(component) {
      case 'infos':
        break;
      case 'needs':
        break;
      case 'badge':
        this.navController.push(BadgesComponent);
        break;


    }
  }

  next() {
    this.navController.push(MapComponent);
  }

}

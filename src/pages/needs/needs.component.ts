import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { NeedsService } from './needs.service';
import { User } from '../../models/user';
import { BadgesComponent} from '../badges/badges.component';

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

}

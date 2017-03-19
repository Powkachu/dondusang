import { Component }       from '@angular/core';
import { ToastController } from 'ionic-angular';

import { NavController, NavParams } from 'ionic-angular';

import { ScanService } from './scan.service';
import { AchievementComponent } from '../achievement/achievement.component';

import { User } from '../../models/user';

declare var cordova:any;

@Component({
  selector: 'display-scan',
  templateUrl: 'display-scan.html'
})
export class DisplayScanComponent
{
  user: User;
  constructor(
    private toastCtrl: ToastController,
    private scanService: ScanService,
    private navController: NavController
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }


  scan()
  {
    cordova.plugins.barcodeScanner.scan((result) => {
      this.scanService.verify(result.text, this.user.id).subscribe(
          res =>
          {
            this.navController.push(AchievementComponent);

          },
          err =>
          {
              this.showMessage('Réessayez de scanner');
          }
      );
    }, (error) => {
      this.showMessage('Réessayez de scanner');
    });
  }

  showMessage(message: string)
  {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 5000
    });
    toast.present();
  }
}

import { Component }       from '@angular/core';
import { ToastController } from 'ionic-angular';

import { ScanService } from './scan.service';

declare var cordova:any;

@Component({
  selector: 'display-scan',
  templateUrl: 'display-scan.html'
})
export class DisplayScanComponent 
{
  constructor(private toastCtrl: ToastController, private scanService: ScanService) {  }

  scan()
  {
    cordova.plugins.barcodeScanner.scan((result) => {
      this.scanService.verify(result).subscribe(
          res =>
          {
            
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

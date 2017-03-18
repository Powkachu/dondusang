import { Component } from '@angular/core';
declare var cordova:any;


import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'scan',
  templateUrl: 'scann.html',
})

export class ScannComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  error: string;
  result: string;

  scann() : void {
    cordova.plugins.barcodeScanner.scan((result) => {
      this.result = result.text;
    }, (error) => {
      this.error = error;
    });

  }

}

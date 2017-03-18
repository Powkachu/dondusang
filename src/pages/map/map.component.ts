import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { NeedsComponent } from '../needs/needs.component';
import { EntityService } from './entity.service';
import { Entity } from '../../models/entity';


@Component({
  selector: 'map',
  templateUrl: 'map.html',
})
export class MapComponent implements OnInit {
  entity: Entity;

  constructor
    (
    private toastCtrl: ToastController,
    private entityService: EntityService,
    private navController: NavController
    ) { }

  getNearestEntity(): void {
    let that : MapComponent = this;
    navigator.geolocation.getCurrentPosition(function (pos) {
    
      that.entityService.getNearest(pos.coords.longitude, pos.coords.latitude).subscribe(
          res =>
          {
            that.entity = res;
            console.log(res);
          },
          err =>
          {
              console.error(err);
          }
      );
    },
    function (err) {
      console.log("Test");
    }, null)
  }

  ngOnInit(): void {
    this.getNearestEntity()
  }

}



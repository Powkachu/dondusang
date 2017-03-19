import { Component, ViewChild, ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';


import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Geolocation } from 'ionic-native';

import { DisplayScanComponent } from '../display-scan/display-scan.component';
import { EntityService } from './entity.service';
import { Entity } from '../../models/entity';

declare var google;

@Component({
  selector: 'map',
  templateUrl: 'map.html',
})
export class MapComponent {

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  entity: Entity;

  constructor
    (
    private toastCtrl: ToastController,
    private entityService: EntityService,
    private navController: NavController
    ) { }

  getNearestEntity(): void {
    let that: MapComponent = this;
    let gotPosition = false;
    Geolocation.getCurrentPosition().then((position) => {
      that.entityService.getNearest(position.coords.longitude, position.coords.latitude).subscribe(
        res => {
            that.entity = res;
            that.createMap(position.coords.latitude, position.coords.longitude);
        },
        err => {
        }
      );

    }, (err) => {
      console.log(err);
    });
  }

  ionViewDidLoad() {
    this.getNearestEntity();
  }

  createMap(latitude: number, longitude: number) {
    let latLng = new google.maps.LatLng(latitude, longitude);
    let mapOptions = {
      center: latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    directionsDisplay.setMap(this.map);

    directionsService.route({
      origin: new google.maps.LatLng(latitude, longitude),
      destination:new google.maps.LatLng(this.entity.latitude, this.entity.longitude),
      travelMode: google.maps.TravelMode.DRIVING
    }, function (response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  next() {
    this.navController.push(DisplayScanComponent);
  }

}



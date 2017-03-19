import { Component }       from '@angular/core';
import { OnInit }          from '@angular/core';


import { NavController }   from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { NeedsComponent }  from '../needs/needs.component';
import { InfosComponent }  from '../infos/infos.component';
import { BadgesService }   from './badges.service';
import { Badge }           from '../../models/badge';


@Component({
  selector: 'badges',
  templateUrl: 'badges.html',
})
export class BadgesComponent implements OnInit
{
  badges: Badge[];

  constructor
  (
    private toastCtrl: ToastController,
    private badgesService: BadgesService ,
    private navController: NavController
  ) { }


  getBadges() : void  {
     this.badgesService.getBadges(JSON.parse(localStorage.getItem("user")).id)
                   .subscribe(badges => this.badges = badges);
  }

  ngOnInit() : void {
    this.getBadges()
  }

  redirect(component : string) : void {
    switch(component) {
      case 'infos':
        this.navController.push(InfosComponent);
        break;
      case 'needs':
        this.navController.push(NeedsComponent);
        break;
      case 'badge':
        break;
    }
  }

  disabledClass(d : boolean) : string {
    if(! d) {
      return "disabled";
    }
    return "";
  }

}



import { Component }       from '@angular/core';

import { NavController }   from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { NeedsComponent }  from '../needs/needs.component';
import { SignUpService }   from './sign-up.service';
import { OnInit }          from '@angular/core';


@Component({
  selector: 'sign-up',
  templateUrl: 'sign-up.html'
})
export class SignUpComponent
{
  constructor
  (
    private toastCtrl: ToastController,
    private signUpService: SignUpService,
    private navController: NavController
  ) { }

  onSubmit(value: any)
  {
    let error : boolean = false;
    if (!value.value.nickname || value.value.nickname == '')
    {
      error = true;
    }
    if (!value.value.password || value.value.password == '')
    {
      error = true;
    }
    if (!value.value.rhesus || value.value.rhesus == '')
    {
      error = true;
    }

    if (!error)
    {
      this.signUpService.signUp(value.value.nickname, value.value.password, value.value.rhesus).subscribe(
          res =>
          {
            localStorage.setItem('user', JSON.stringify(res));
            this.navController.push(NeedsComponent);
          },
          err =>
          {
              this.showMessage('Ce pseudo existe déjà');
          }
      );
    } else {
      this.showMessage('Veuillez saisir des informations valides');
    }
  }

  showMessage(message: string)
  {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 5000
    });
    toast.present();
  }

  ngOnInit() : void {
    if(localStorage.getItem('user') != null) {
      this.navController.push(NeedsComponent);
    }
  }


}

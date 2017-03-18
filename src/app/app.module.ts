import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { NeedsComponent } from '../pages/needs/needs.component';
import { SignUpComponent } from '../pages/sign-up/sign-up.component';
import { SignUpService } from '../pages/sign-up/sign-up.service';
import { BadgesComponent } from '../pages/badges/badges.component';
import { BadgesService } from '../pages/badges/badges.service';
import { ScannComponent } from '../pages/scann/scann.component';
import { TabsPage } from '../pages/tabs/tabs';
import { NeedsService } from '../pages/needs/needs.service';
import { DisplayScanComponent } from '../pages/display-scan/display-scan.component'
import { ScanService } from '../pages/display-scan/scan.service';

@NgModule({
  declarations: [
    MyApp,
    NeedsComponent,
    SignUpComponent,
    BadgesComponent,
    ScannComponent,
    DisplayScanComponent,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NeedsComponent,
    SignUpComponent,
    BadgesComponent,
    ScannComponent,
    DisplayScanComponent,
    TabsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SignUpService,
    NeedsService,
    BadgesService,
    ScanService
  ]
})
export class AppModule {}

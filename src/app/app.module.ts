import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterContactsComponent } from './components/footer-contacts/footer-contacts.component';
import { HeaderComponent } from './components/header/header.component';
import { AreaOfWorkComponent } from './components/area-of-work/area-of-work.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { OurServiceComponent } from './components/our-service/our-service.component';
import { SchemeOfWorkComponent } from './components/scheme-of-work/scheme-of-work.component';
import { PromoComponent } from './components/promo/promo.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './components/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterContactsComponent,
    HeaderComponent,
    AreaOfWorkComponent,
    OurServiceComponent,
    SchemeOfWorkComponent,
    PromoComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule, NgxPageScrollModule, NgxPageScrollCoreModule, BrowserAnimationsModule, MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

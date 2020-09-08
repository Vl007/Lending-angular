import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }


  constructor() { }

  ngOnInit(): void {

  }

  scrollToPromo() {
    document.getElementById('promo').scrollIntoView({block: "center"});
  }
  scrollToHome() {
    document.getElementById('home').scrollIntoView({block: "center"});
  }
  scrollToOurService() {
    document.getElementById('ourService').scrollIntoView({block: "center"});
  }
  scrollToAreaOfWork() {
    document.getElementById('areaOfWork').scrollIntoView({block: "center"});
  }
  scrollToSchemeOfWork() {
    document.getElementById('schemeOfWork').scrollIntoView({block: "center"});
  }
  scrollToContacts() {
    document.getElementById('contacts').scrollIntoView({block: "center"});
  }
}

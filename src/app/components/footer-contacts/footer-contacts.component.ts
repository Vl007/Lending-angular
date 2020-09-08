import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-contacts',
  templateUrl: './footer-contacts.component.html',
  styleUrls: ['./footer-contacts.component.scss']
})
export class FooterContactsComponent implements OnInit {

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
}

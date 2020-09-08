import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.scss']
})
export class OurServiceComponent implements OnInit {

  @Input()
  boxClass: string;

  @Input()
  serviceText1: string;

  @Input()
  serviceText2: string;

  serviceText: string;

  serviceButtonText = 'Узнать больше +';

  visibility = false;

  showService() {
    this.visibility = !this.visibility;
    if (this.visibility) {
      this.serviceText = this.serviceText2;
      this.serviceButtonText = '< Назад';
    } else {
      this.serviceText = this.serviceText1;
      this.serviceButtonText = 'Узнать больше +';
    }
  }

  constructor() {
  }

  ngOnInit(): void {
    this.serviceText = this.serviceText1;
  }

}

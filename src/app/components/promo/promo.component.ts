import { Component, Input, OnInit } from '@angular/core';
import {newArray} from "@angular/compiler/src/util";

@Component({
  selector: 'promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {


  @Input()
  promoText1: string;
  @Input()
  promoTitle1: string;
  @Input()
  promoText2: string;
  @Input()
  promoTitle2: string;

  promoTitle: string;
  promoText: string;

  promoButtonText = 'Узнать +';

  visibility = false;

  showPromo() {
    this.visibility = !this.visibility;
    if (this.visibility) {
      this.promoTitle = this.promoTitle2;
      this.promoText = this.promoText2;
      this.promoButtonText = '< Назад';
    } else {
      this.promoTitle = this.promoTitle1;
      this.promoText = this.promoText1;
      this.promoButtonText = 'Узнать +';
    }
  }

  constructor() {
  }

  ngOnInit(): void {
    this.promoText = this.promoText1;
    this.promoTitle = this.promoTitle1;
  }
}

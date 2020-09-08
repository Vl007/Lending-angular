import { Component, ViewChild } from '@angular/core';
import {element} from "protractor";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'DonTehCenter';

  arrNum = "01";
  arrName = "Главная";

  @ViewChild('line') line: any;
  @ViewChild('blackLine') blackLine: any;
  @ViewChild('mobileButton') mobileButton: any
  @ViewChild('pageName') pageName: any

  // scrollItemIndex = 0;

  scrollTop2

  scrollUp2 () {
    if (this.scrollTop2 >= 0 && this.scrollTop2 < 800) {
      document.getElementById('home').scrollIntoView({block: "center", behavior: "smooth"});
    } else if (this.scrollTop2 < 2400 && this.scrollTop2 > 800) {
      document.getElementById('home').scrollIntoView({block: "center", behavior: "smooth"});
    } else if (this.scrollTop2 < 3800 && this.scrollTop2 > 2400) {
      document.getElementById('areaOfWork').scrollIntoView({block: "center", behavior: "smooth"});
    } else if (this.scrollTop2 < 4500 && this.scrollTop2 > 3800) {
      document.getElementById('ourService').scrollIntoView({block: "center", behavior: "smooth"});
    } else if (this.scrollTop2 > 4500) {
      document.getElementById('schemeOfWork').scrollIntoView({block: "center", behavior: "smooth"});
    }
  }

  scrollDown2 () {
    if (this.scrollTop2 >= 0 && this.scrollTop2 < 800) {
      document.getElementById('areaOfWork').scrollIntoView({block: "center", behavior: "smooth"});
    } else if (this.scrollTop2 < 2400 && this.scrollTop2 > 800) {
      document.getElementById('ourService').scrollIntoView({block: "center", behavior: "smooth"});
    } else if (this.scrollTop2 < 3800 && this.scrollTop2 > 2400) {
      document.getElementById('schemeOfWork').scrollIntoView({block: "center", behavior: "smooth"});
    } else if (this.scrollTop2 < 4500 && this.scrollTop2 > 3800) {
      document.getElementById('promo').scrollIntoView({block: "center", behavior: "smooth"});
    } else if (this.scrollTop2 > 4500) {
      // document.getElementById('promo').scrollIntoView({block: "center", behavior: "smooth"});
    }
  }

  scrollMain(event) {
    const target: HTMLElement = event.target;
    this.scrollTop2 = target.scrollTop;
    const scrollHeight = target.scrollHeight;
    // const mobileScroll = window.pageYOffset;
    const blackLine = this.blackLine.nativeElement;
    blackLine.style.height = (this.line.nativeElement.clientHeight * this.scrollTop2 / scrollHeight+32) + 'px';

    const pageName = this.pageName.nativeElement;

    if (this.scrollTop2 <= document.documentElement.clientHeight && this.scrollTop2 > 0 && this.scrollTop2 < 800) {
      this.arrNum = '01'; this.arrName = 'Главная';
      pageName.style.paddingLeft = '100px'
    } else if (this.scrollTop2 < 2400 && this.scrollTop2 > 800){
      this.arrNum = '02'; this.arrName = 'Направление работ';
      pageName.style.paddingLeft = '0px'
    } else if (this.scrollTop2 >= document.documentElement.clientHeight && this.scrollTop2 < 3800 && this.scrollTop2 > 2400) {
      this.arrNum = '03'; this.arrName = 'Наши услуги';
      pageName.style.paddingLeft = '60px'
    } else if (this.scrollTop2 >= document.documentElement.clientHeight && this.scrollTop2 < 4500 && this.scrollTop2 > 3800) {
      this.arrNum = '04'; this.arrName = 'Схема работы';
      pageName.style.paddingLeft = '50px'
    } else if (this.scrollTop2 >= document.documentElement.clientHeight && this.scrollTop2 < 4800 && this.scrollTop2 > 4500) {
      this.arrNum = '05'; this.arrName = 'Акции';
      pageName.style.paddingLeft = '115px'
    }

    // console.log(this.scrollTop2);
    // console.log(document.documentElement.clientHeight);
    const mobileButton = this.mobileButton.nativeElement;
    if (this.scrollTop2 > document.documentElement.clientHeight){
      mobileButton.style.display = "block"
    } else {
      mobileButton.style.display = "none"
    }
  }


  scrollToHome() {
    document.getElementById('home').scrollIntoView({block: "center", behavior: "smooth"});
  }

  // scrollUp() {
  //   this.scrollItemIndex = Math.max(0, this.scrollItemIndex - 1);
  //   this.scrollToItem();
  // }
  //
  // scrollDown() {
  //   this.scrollItemIndex = Math.min(document.getElementsByClassName('scroll-item').length - 1, this.scrollItemIndex + 1);
  //   this.scrollToItem();
  // }
  //
  // scrollToItem() {
  //   const scrollElements = document.getElementsByClassName('scroll-item');
  //   scrollElements.item(this.scrollItemIndex).scrollIntoView({behavior: "smooth"});
  // }
}

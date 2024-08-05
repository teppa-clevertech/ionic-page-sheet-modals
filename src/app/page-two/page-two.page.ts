import { Component } from '@angular/core';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.page.html',
  styleUrls: ['./page-two.page.scss'],
})
export class PageTwoPage {
  constructor(private modalCtrl: ModalController) {}

  /* 
    Ionic Sheet Modals don't close by themselves when navigating to another page.

    We need to close them manually.
  */

  /*
    Closing modal from ionViewWillLeave 
    Seems to do the trick
  */
  /*
  async ionViewWillLeave() {
    this.modalCtrl?.dismiss();
  }
  */

  /*
    Closing modal from ionViewDidLeave 
    keeps the modal content for a moment in the next page when going back
  */
  async ionViewDidLeave() {
    this.modalCtrl?.dismiss();
  }
}

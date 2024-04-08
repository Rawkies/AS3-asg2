import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-mobile6',
  templateUrl: './mobile6.page.html',
  styleUrls: ['./mobile6.page.scss'],
})
export class Mobile6Page implements OnInit {
  constructor(private alertController: AlertController) {}

  ngOnInit(): void {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Thankyou for buying on our store!',
      buttons: ['Confirm'],
    });

    await alert.present();
  }
}

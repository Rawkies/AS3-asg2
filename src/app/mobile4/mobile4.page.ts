import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-mobile4',
  templateUrl: './mobile4.page.html',
  styleUrls: ['./mobile4.page.scss'],
})
export class Mobile4Page implements OnInit {
  constructor(private alertController: AlertController) {}

  ngOnInit(): void {
  }

  public actionSheetButtons = [
    {
      text: 'Confirm',
      role: 'Confirm',
      data: {
        action: 'Confirm',
      },
      handler: () => {
        this.showRentSuccessAlert();
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  async showRentSuccessAlert() {
    const alert = await this.alertController.create({
      message: 'Your item successfully added into cart.',
      buttons: ['Confirm'],
    });

    await alert.present();
  }
}

import { Component } from '@angular/core';
// import { ModalController } from '@ionic/angular';
// import { CreatePostPage } from '../create-post/create-post.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  selected: any;

  constructor(
    // public modalController: ModalController,
  ) { }

  setCurrentTab(ev) {
    this.selected = ev.tab;
  }

  // async openCreatePost() {
  //   const modal = await this.modalController.create({
  //     component: CreatePostPage,
  //     componentProps: {
  //     },
  //     backdropDismiss: false,
  //     animated: true,
  //   });
  //   await modal.present();
  //   const modalResponse = await modal.onDidDismiss();
  // }

}

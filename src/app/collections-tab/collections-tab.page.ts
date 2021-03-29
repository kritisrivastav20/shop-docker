import { Component } from '@angular/core';
import { data } from '../data.constant';
import { ToastController, ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-collections-tab',
  templateUrl: 'collections-tab.page.html',
  styleUrls: ['collections-tab.page.scss']
})
export class CollectionsTabPage {
  selector: any = [];

  sliderConfig = {
    slidesPerView: 3,
    spaceBetween: 2,
    centeredSlides: false
  };
  public images = [
    {
      product: "assets/images/bb.jpg",
      tag: "Product 1",
      posts: "$ 89"
    },
    {
      product: "assets/images/aa.jpg",
      tag: "Product 2",
      posts: "$ 20"
    },
    {
      product: "assets/images/bb.jpg",
      tag: "Product 3",
      posts: "$ 20"
    },
    {
      product: "assets/images/ee.jpg",
      tag: "Product 4",
      posts: "$ 46"
    },
    {
      product: "assets/images/aa.jpg",
      tag: "Product 5",
      posts: "$ 54"
    },
    {
      product: "assets/images/cc.jpg",
      tag: "Product 6",
      posts: "$ 29"
    },
    {
      product: "assets/images/ff.jpg",
      tag: "Product 7",
      posts: "$ 35"
    },
    {
      product: "assets/images/dd.jpg",
      tag: "Product 8",
      posts: "$ 15"
    },
  ]

  public posts = [
    {
      name: 'Valeria Lipovetsky',
      profileImg: 'assets/images/avatar.svg',
      postImg: 'assets/images/post.svg',
      isFollow: true,
      isLiked: true,
      description: `Sneak a peek into the closet`,
      tags: ['instyle', 'mensfashion', 'casual', 'casualstyle'],
      time: '35 min ago',
      totalLikes: '2.7k',
      tag: "category 1",
      posts: "$ 89"
    },
    {
      name: 'Liliana Ava',
      profileImg: 'assets/images/avatar2.png',
      postImg: 'assets/images/post-img/25.jpg',
      isFollow: false,
      isLiked: false,
      description: `Sneak a peek into the closet of literally any guy you know,
        and you’ll see some combination of dark-wash...`,
      tags: ['instyle', 'mensfashion', 'casual', 'casualstyle'],
      time: '35 min ago',
      totalLikes: '2.7k',
      tag: "category 2",
      posts: "$ 89"
    },
    {
      name: 'Jessica Barbara',
      profileImg: 'assets/images/avatar3.png',
      postImg: 'assets/images/post-img/fash3.jpeg',
      isFollow: true,
      isLiked: false,
      description: `Sneak a peek into the closet of literally any guy you know,
        and you’ll see some combination of dark-wash...`,
      tags: ['instyle', 'mensfashion', 'casual', 'casualstyle'],
      time: '35 min ago',
      totalLikes: '2.7k',
      tag: "category 3",
      posts: "$ 89"
    },
    {
      name: 'Jennifer Elizabeth',
      profileImg: 'assets/images/avatar4.png',
      postImg: 'assets/images/post-img/fash4.jpg',
      isFollow: false,
      isLiked: true,
      description: `Sneak a peek into the closet of literally any guy you know,
        and you’ll see some combination of dark-wash...`,
      tags: ['instyle', 'mensfashion', 'casual', 'casualstyle'],
      time: '35 min ago',
      totalLikes: '2.7k',
      tag: "category 4",
      posts: "$ 89"
    }
  ];
  constructor(private toastController: ToastController,
    private aController: ActionSheetController) {
    this.selector = "Products";
  }

  async bagit(item) {
    data.items.push({
      image: item.postImg,
      item: item.tag,
      quantity: 1
    })

      const toast = await this.toastController.create({
        message: 'Item added successfully!',
        position: 'top',
        duration: 2000
      });
      toast.present();
    }
    async presentToastWithOptions(item) {
      const actionSheet = await this.aController.create({
        header: 'Options',
        cssClass: 'my-custom-class',
        buttons: [ {
          text: 'Add to Bag',
          icon: 'cart',
          role: 'destructive',
          handler: () => {
            this.bagit(item);
          }
        }]
      });
      await actionSheet.present();
    }

}

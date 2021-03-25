import { Component, OnInit, Input } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { from } from 'rxjs';
import { data } from '../data.constant';
@Component({
  selector: 'app-productslides',
  templateUrl: './productslides.component.html',
  styleUrls: ['./productslides.component.scss'],
})
export class ProductslidesComponent implements OnInit {

  // @Input() images: any;
  @Input() index: any;

  public images = [
    {
      name: 'User name 1',
      profileImg: 'assets/images/avatar.svg',
      postImg: 'assets/images/post.svg',
      isFollow: true,
      isLiked: true,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      `,
      tags: ['collection', 'newuser', 'text', 'post'],
      time: '35 min ago',
      totalLikes: '2.7k'
    },
    {
      name: 'User name 2',
      profileImg: 'assets/images/avatar2.png',
      postImg: 'assets/images/post-img/21.jpg',
      isFollow: false,
      isLiked: false,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod`,
      tags: ['collection', 'newuser', 'text', 'post'],
      time: '40 min ago',
      totalLikes: '500'
    },
    {
      name: 'User name 3',
      profileImg: 'assets/images/avatar3.png',
      postImg: 'assets/images/aa.jpg',
      isFollow: true,
      isLiked: false,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit..`,
      tags: ['collection', 'newuser', 'text', 'post'],
      time: '50 min ago',
      totalLikes: '120'
    },
    {
      name: 'User name 4',
      profileImg: 'assets/images/avatar4.png',
      postImg: 'assets/images/post-img/fash4.jpg',
      isFollow: false,
      isLiked: true,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut`,
      tags: ['collection', 'newuser', 'text', 'post'],
      time: '1 day ago',
      totalLikes: '1.3k'
    }
  ];
  b:any;
  constructor(private modal: ModalController, private toastController: ToastController) { }

  ngOnInit() {
  }
  dismiss(){
  }
  async bagit(item) {
    data.items.push({
      image: item.postImg,
      item: item.name,
      quantity: 1
    })

      const toast = await this.toastController.create({
        message: 'Item added successfully!',
        position: 'top',
        duration: 2000
      });
      toast.present();
    }
}

import { Component, OnInit } from '@angular/core';
import { ToastController, ModalController, ActionSheetController } from '@ionic/angular';
import { from } from 'rxjs';
import { ProductslidesComponent } from '../productslides/productslides.component';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home-tab',
  templateUrl: 'home-tab.page.html',
  styleUrls: ['home-tab.page.scss']
})
export class HomeTabPage implements OnInit {
  a: any;
  save: any;
  public posts = [
    {
      name: 'Username 1',
      profileImg: 'assets/images/avatar.svg',
      postImg: 'assets/images/post.svg',
      isFollow: true,
      isLiked: true,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. 
      `,
      tags: ['collection', 'newuser', 'text', 'post'],
      time: '35 min ago',
      totalLikes: '2.7k'
    },
    {
      name: 'name 2',
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
      name: 'name 3',
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
      name: 'name 4',
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
  ShowProducts: any = [];
b: any;
  constructor(private modal: ModalController,
    private router: Router, private aController: ActionSheetController) {
   }
   ngOnInit(){
     this.ShowProducts.length = this.posts.length;
   }

  getShortName(fullName) { 
    return fullName.split(' ').slice(0, -1).join(' ');
  }
  OpenProducts(i){
    (this.ShowProducts[i] === true) ? this.ShowProducts[i] = false : this.ShowProducts[i] = true;
  }
  HideProducts(i){
    this.ShowProducts[i] = false;
  }
  adjustElementOnScroll(ev) {
    this.a = document.getElementById("header");
          this.a.style.display = 'none'; 
          if(ev.detail.deltaY < 0){
            this.a.style.display = 'block'; 
          }
}
async presentToastWithOptions(item) {
  const follow = item.isFollow;
  let action = follow === true ? 'Unfollow' : 'Follow';
  const actionSheet = await this.aController.create({
    header: 'Options',
    cssClass: 'my-custom-class',
    buttons: [{
      text: action,
      role: 'destructive',
      icon: 'people',
      handler: () => {
        follow === true ? item.isFollow = false : item.isFollow = true;
      }
    }, {
      text: 'Add to Favorites',
      icon: 'heart',
      role: 'destructive',
      handler: () => {
      }
    }]
  });
  await actionSheet.present();
}

}

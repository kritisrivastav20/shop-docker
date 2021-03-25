import { Component } from '@angular/core';
@Component({
  selector: 'app-search-tab',
  templateUrl: 'search-tab.page.html',
  styleUrls: ['search-tab.page.scss']
})
export class SearchTabPage {

  a: any;
  selector: any = [];
  viewsearches: any; showHashtags: any;
  public posts = [
    {
      name: 'User name 1',
      profileImg: 'assets/images/avatar.svg',
      postImg: 'assets/images/post.svg',
      path: '@Valpovetsky',
      isFollow: true,
      isLiked: true,
      description: `Sneak a peek into the closet`,
      images: ['assets/images/post.svg', 'assets/images/post-img/12.jpg', 'assets/images/post-img/13.jpg', 'assets/images/post-img/14.jpg'],
      time: '35 min ago',
      totalLikes: '2.7k'
    },
    {
      name: 'User name 2',
      profileImg: 'assets/images/avatar2.png',
      postImg: 'assets/images/post-img/26.jpg',
      path: '@Lilyava',
      isFollow: false,
      isLiked: false,
      description: `Sneak a peek into the closet of literally any guy you know,
        and you’ll see some combination of dark-wash...`,
        images: ['assets/images/post-img/15.jpg', 'assets/images/post-img/16.jpeg', 'assets/images/post-img/17.jpg', 'assets/images/post-img/fash4.jpg'],
      time: '35 min ago',
      totalLikes: '2.7k'
    },
    {
      name: 'User name 3',
      profileImg: 'assets/images/avatar3.png',
      postImg: 'assets/images/post-img/fash3.jpeg',
      path: '@Jessica',
      isFollow: true,
      isLiked: false,
      description: `Sneak a peek into the closet of literally any guy you know,
        and you’ll see some combination of dark-wash...`,
      images: ['assets/images/post-img/22.jpg', 'assets/images/post-img/21.jpg', 'assets/images/post-img/fash3.jpeg', 'assets/images/post-img/23.jpg'],
      time: '35 min ago',
      totalLikes: '2.7k',
      
    },
    {
      name: 'User name 4',
      profileImg: 'assets/images/avatar4.png',
      postImg: 'assets/images/post-img/fash4.jpg',
      path: '@Jennifer',
      isFollow: false,
      isLiked: true,
      description: `Sneak a peek into the closet of literally any guy you know,
        and you’ll see some combination of dark-wash...`,
        images: ['assets/images/post-img/21.jpg', 'assets/images/post-img/25.jpg', 'assets/images/post-img/22.jpg', 'assets/images/post-img/fash4.jpg'],
      time: '35 min ago',
      totalLikes: '2.7k'
    }
  ];

  public images = [
    {
      product: ["assets/images/aa.jpg", "assets/images/ff.jpg"],
      tag: "#collection",
      posts: "15.6K posts"
    },
    {
      product: ["assets/images/cc.jpg", "assets/images/aa.jpg"],
      tag: "#posts",
      posts: "12K posts"
    },
    {
      product: ["assets/images/ee.jpg", "assets/images/bb.jpg"],
      tag: "#newpictures",
      posts: "2K posts"
    },
    {
      product: ["assets/images/cc.jpg", "assets/images/dd.jpg"],
      tag: "#collection",
      posts: "15.6K posts"
    },
  ]
  constructor() {
    this.selector = "Current";
  }

   adjustElementOnScroll(ev) {
    // this.a = document.getElementById("searchheader");
    //       this.a.style.display = 'none'; 
    //       if(ev.detail.deltaY < 0){
    //         this.a.style.display = 'block'; 
    //       }
}
showSearch(){
this.viewsearches = true;
}
viewHashtags(){
  this.viewsearches = null;
  this.showHashtags = true;
}
hideSearch() {
  this.viewsearches = false;
  this.showHashtags = false;
}
setView(ev) {
  this.viewsearches = true;
  this.showHashtags = false;
}
}

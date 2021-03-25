import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-tab',
  templateUrl: 'menu-tab.page.html',
  styleUrls: ['menu-tab.page.scss']
})
export class MenuTabPage {

  selector: any;
  sliderConfig = {
    slidesPerView: 3,
    spaceBetween: 2,
    centeredSlides: false
  };
  isFollow: any;
  public images = [
    {
      product: 'assets/images/post-img/15.jpg',
      tag: "#bobbibrown",
      posts: "15.6K posts"
    },
    {
      product: 'assets/images/post-img/16.jpeg',
      tag: "#JasmineMaria",
      posts: "12K posts"
    },
    {
      product: 'assets/images/post-img/17.jpg',
      tag: "#makeupCollection",
      posts: "2K posts"
    },
    {
      product: 'assets/images/post-img/21.jpg',
      tag: "#bobbibrown",
      posts: "15.6K posts"
    },
    {
      product: 'assets/images/post-img/22.jpg',
      tag: "#bobbibrown",
      posts: "15.6K posts"
    },
    {
      product: 'assets/images/post-img/23.jpg',
      tag: "#JasmineMaria",
      posts: "12K posts"
    },
    {
      product: 'assets/images/post-img/14.jpg',
      tag: "#makeupCollection",
      posts: "2K posts"
    },
    {
      product: 'assets/images/post-img/15.jpg',
      tag: "#bobbibrown",
      posts: "15.6K posts"
    },
    {
      product: 'assets/images/post-img/26.jpg',
      tag: "#bobbibrown",
      posts: "15.6K posts"
    },
  ]

  public products = [
    {
      product: "assets/images/bb.jpg",
      tag: "Product 1",
      posts: "$ 89",
      isFollow: true,
    },
    {
      product: "assets/images/aa.jpg",
      tag: "Product 2",
      posts: "$ 20",
      isFollow: false,
    },
    {
      product: "assets/images/bb.jpg",
      tag: "Product 3",
      posts: "$ 20",
      isFollow: true,
    },
    {
      product: "assets/images/ee.jpg",
      tag: "Product 4",
      posts: "$ 46",
      isFollow: false,
    },
    {
      product: "assets/images/aa.jpg",
      tag: "Product 5",
      posts: "$ 54",
      isFollow: false,
    },
    {
      product: "assets/images/cc.jpg",
      tag: "Product 6",
      posts: "$ 29",
      isFollow: false,
    },
    {
      product: "assets/images/ff.jpg",
      tag: "Product 7",
      posts: "$ 35",
      isFollow: true,
    },
    {
      product: "assets/images/dd.jpg",
      tag: "Product 8",
      posts: "$ 15",
      isFollow: true,
    },
  ]

  constructor() {
    this.selector = "Current"
  }

}

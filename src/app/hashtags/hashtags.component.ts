import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hashtags',
  templateUrl: './hashtags.component.html',
  styleUrls: ['./hashtags.component.scss'],
})
export class HashtagsComponent implements OnInit {

  @Output() output: EventEmitter<any> = new EventEmitter();

   public images = [
    {
      product: "assets/images/aa.jpg",
      tag: "#bobbibrown",
      posts: "15.6K posts"
    },
    {
      product: "assets/images/bb.jpg",
      tag: "#JasmineMaria",
      posts: "12K posts"
    },
    {
      product: "assets/images/dd.jpg",
      tag: "#makeupCollection",
      posts: "2K posts"
    },
    {
      product: "assets/images/cc.jpg",
      tag: "#bobbibrown",
      posts: "15.6K posts"
    },
    {
      product: "assets/images/ee.jpg",
      tag: "#bobbibrown",
      posts: "15.6K posts"
    },
    {
      product: "assets/images/ff.jpg",
      tag: "#JasmineMaria",
      posts: "12K posts"
    },
    {
      product: "assets/images/aa.jpg",
      tag: "#makeupCollection",
      posts: "2K posts"
    },
    {
      product: "assets/images/cc.jpg",
      tag: "#bobbibrown",
      posts: "15.6K posts"
    },
  ]

  constructor() { }

  ngOnInit() {}

  sendOutput() {
    this.output.emit(false);
 }

}

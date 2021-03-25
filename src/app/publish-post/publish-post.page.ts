import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, IonSlides } from '@ionic/angular';
import { ImagePickerOptions, ImagePicker } from '@ionic-native/image-picker/ngx';
import { ProductModel } from '../model/product.model';

@Component({
  selector: 'app-publish-post',
  templateUrl: './publish-post.page.html',
  styleUrls: ['./publish-post.page.scss'],
})
export class PublishPostPage implements OnInit {

  // @ViewChild('slides', { static: false }) slides: IonSlides;

  public postImage = '';
  public postCaption = '';
  public postHashTags: string[] = [];

  public isProductImageSelected = false;
  public postProducts: ProductModel[];

  public activeSlideIndex = 0;

  public slideOpts = {
    initialSlide: 0,
    direction: 'horizontal',
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 1.5,
    freeMode: false,
    loop: false,
    centeredSlides: true
  };

  constructor(
    public modlaCtrl: ModalController,
    public navParams: NavParams,
    private imagePicker: ImagePicker
  ) {
    this.postImage = navParams.data.postImageValue;
    this.postCaption = navParams.data.postDescription;
    this.postHashTags = navParams.data.postHashTags;

    console.log('constructor: ', this.postHashTags, this.postCaption);
  }

  ngOnInit() {
  }

  closeModal() {
    this.modlaCtrl.dismiss('');
  }

  selectProductImage() {
    const options: ImagePickerOptions = {
      maximumImagesCount: 10,
      outputType: 1,
      quality: 75
    };

    this.imagePicker.hasReadPermission().then((hasPerm) => {
      console.log('hasReadPermission: ', hasPerm);
      if (!hasPerm) {
        this.imagePicker.requestReadPermission().then((permReq) => {
          console.log('requestReadPermission: ', permReq);
        }).catch((err) => {
          console.log('requestReadPermission err: ', err);
        });
      } else {
        if (!this.isProductImageSelected) {
          this.postProducts = [];
        }
        this.imagePicker.getPictures(options).then((results) => {
          console.log('Image URI: ', results);
          if (results.length !== 0 && results !== 'OK') {
            this.isProductImageSelected = true;
          }
          results.forEach(result => {
            const product: ProductModel = {};
            product.imageBase64 = result;
            this.postProducts.push(product);
          });
          console.log('postProducts: ', this.postProducts);
          console.log('isProductImageSelected: ', this.isProductImageSelected);
        }, (err) => {
          console.log('error in getting image: ', err);
        });
      }
    }).catch((err) => {
      console.log('hasReadPermission err: ', err);
    });
  }

  removeProduct(index: number) {
    console.log('removeProduct: ', index);
    this.postProducts.splice(index, 1);
    this.activeSlideIndex += 1;
  }

  imageChanged(slides: IonSlides) {
    slides.getActiveIndex().then((index: number) => {
      console.log(index);
      this.activeSlideIndex = index;
    });
  }
}

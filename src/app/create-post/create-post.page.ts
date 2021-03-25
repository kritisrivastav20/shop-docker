import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { PublishPostPage } from '../publish-post/publish-post.page';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {

  public isPostImageUploaded = false;
  public hashTags: string[] = [];
  public hashInputValue = '';
  public captionInputValue = '';
  public postImageBase64Value = '';

  constructor(
    public modlaCtrl: ModalController,
    public navParams: NavParams,
    private imagePicker: ImagePicker
  ) { }

  ngOnInit() {
  }

  closeModal() {
    this.modlaCtrl.dismiss('');
  }

  hashtagCheck(event) {
    if (event.detail.inputType === 'insertText' && event.detail.data === ' ') {
      // console.log('hashInputValue: ', this.hashInputValue);
      this.hashTags.push(this.hashInputValue);
      this.hashInputValue = '';
    }
  }

  deleteHashTag(index: number) {
    // console.log('delete index: ', index);
    this.hashTags.splice(index, 1);
  }

  selectImage() {
    const options: ImagePickerOptions = {
      maximumImagesCount: 1,
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
        this.imagePicker.getPictures(options).then((results) => {
          console.log('Image URI: ', results);
          if (results.length !== 0 && results !== 'OK') {
            this.postImageBase64Value = results[0];
            this.isPostImageUploaded = true;
          }
        }, (err) => {
          console.log('error in getting image: ', err);
        });
      }

    }).catch((err) => {
      console.log('hasReadPermission err: ', err);
    });
  }

  async goToPublishPage() {
    // if (this.isPostImageUploaded && this.captionInputValue !== '' && this.hashTags.length !== 0) {
    const modal = await this.modlaCtrl.create({
      component: PublishPostPage,
      componentProps: {
        postImageValue: this.postImageBase64Value,
        postDescription: this.captionInputValue,
        postHashTags: this.hashTags
      },
      backdropDismiss: false,
      animated: true,
    });
    await modal.present();
    const modalResponse = await modal.onDidDismiss();
    // }
  }

}

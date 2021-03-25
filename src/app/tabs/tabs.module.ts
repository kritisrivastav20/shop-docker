import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
// import { CreatePostPage } from '../create-post/create-post.page';
import { PublishPostPage } from '../publish-post/publish-post.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
    // CreatePostPage,
    PublishPostPage
  ],
  entryComponents: [
    // CreatePostPage,
    PublishPostPage
  ]
})
export class TabsPageModule { }

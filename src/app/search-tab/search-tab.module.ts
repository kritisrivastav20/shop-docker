import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchTabPage } from './search-tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { HashtagsComponentModule } from '../hashtags/hashtags.module';
import { SearchTabPageRoutingModule } from './search-tab-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HashtagsComponentModule,
    SearchTabPageRoutingModule
  ],
  declarations: [SearchTabPage]
})
export class SearchTabPageModule {}

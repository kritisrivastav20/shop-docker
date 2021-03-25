import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PublishTabPage } from './publish-tab.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PublishTabPageRoutingModule } from './publish-tab-routing.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: PublishTabPage }]),
    PublishTabPageRoutingModule,
  ],
  declarations: [PublishTabPage]
})
export class PublishTabPageModule {}

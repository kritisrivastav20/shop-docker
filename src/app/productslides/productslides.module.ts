import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductslidesComponent } from './productslides.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [ProductslidesComponent],
  exports: [ProductslidesComponent]
})
export class ProductslidesComponentModule {}

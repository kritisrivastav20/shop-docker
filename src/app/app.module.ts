import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ProductslidesComponent } from './productslides/productslides.component';
import { ProductslidesComponentModule } from './productslides/productslides.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HashtagsComponent } from './hashtags/hashtags.component';
import { HashtagsComponentModule } from './hashtags/hashtags.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [ProductslidesComponent, HashtagsComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ProductslidesComponentModule, HashtagsComponentModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ImagePicker
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

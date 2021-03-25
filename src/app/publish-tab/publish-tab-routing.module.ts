import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublishTabPage } from './publish-tab.page';

const routes: Routes = [
  {
    path: '',
    component: PublishTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublishTabPageRoutingModule {}

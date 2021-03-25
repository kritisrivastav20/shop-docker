import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsTabPage } from './collections-tab.page';

const routes: Routes = [
  {
    path: '',
    component: CollectionsTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsTabPageRoutingModule {}

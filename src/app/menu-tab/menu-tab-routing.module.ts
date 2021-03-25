import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTabPage } from './menu-tab.page';

const routes: Routes = [
  {
    path: '',
    component: MenuTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuTabPageRoutingModule {}

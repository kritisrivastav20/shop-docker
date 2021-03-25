import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home-tab',
        loadChildren: () => import('../home-tab/home-tab.module').then(m => m.HomeTabPageModule)
      },
      {
        path: 'search-tab',
        loadChildren: () => import('../search-tab/search-tab.module').then(m => m.SearchTabPageModule)
      },
      {
        path: 'collections-tab',
        loadChildren: () => import('../collections-tab/collections-tab.module').then(m => m.CollectionsTabPageModule)
      },
      {
        path: 'publish-tab',
        loadChildren: () => import('../publish-tab/publish-tab.module').then(m => m.PublishTabPageModule)
      },
      {
        path: 'menu-tab',
        loadChildren: () => import('../menu-tab/menu-tab.module').then(m => m.MenuTabPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home-tab',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home-tab',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

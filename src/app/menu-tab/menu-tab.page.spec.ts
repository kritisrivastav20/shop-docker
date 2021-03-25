import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MenuTabPage } from './menu-tab.page';

describe('MenuTabPage', () => {
  let component: MenuTabPage;
  let fixture: ComponentFixture<MenuTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MenuTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

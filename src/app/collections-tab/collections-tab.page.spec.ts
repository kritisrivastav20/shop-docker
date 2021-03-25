import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CollectionsTabPage } from './collections-tab.page';

describe('CollectionsTabPage', () => {
  let component: CollectionsTabPage;
  let fixture: ComponentFixture<CollectionsTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollectionsTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionsTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

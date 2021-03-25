import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { SearchTabPage } from './search-tab.page';

describe('SearchTabPage', () => {
  let component: SearchTabPage;
  let fixture: ComponentFixture<SearchTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

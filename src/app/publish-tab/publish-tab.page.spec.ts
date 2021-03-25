import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PublishTabPage } from './publish-tab.page';

describe('PublishTabPage', () => {
  let component: PublishTabPage;
  let fixture: ComponentFixture<PublishTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PublishTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PublishTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

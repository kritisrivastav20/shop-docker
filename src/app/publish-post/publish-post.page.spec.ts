import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PublishPostPage } from './publish-post.page';

describe('PublishPostPage', () => {
  let component: PublishPostPage;
  let fixture: ComponentFixture<PublishPostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishPostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PublishPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

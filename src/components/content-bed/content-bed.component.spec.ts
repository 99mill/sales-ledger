import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentBedComponent } from './content-bed.component';

describe('ContentBedComponent', () => {
  let component: ContentBedComponent;
  let fixture: ComponentFixture<ContentBedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentBedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

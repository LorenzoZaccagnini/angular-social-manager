import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmediaComponent } from './allmedia.component';

describe('AllmediaComponent', () => {
  let component: AllmediaComponent;
  let fixture: ComponentFixture<AllmediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllmediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

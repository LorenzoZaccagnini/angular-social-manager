import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllassetComponent } from './allasset.component';

describe('AllassetComponent', () => {
  let component: AllassetComponent;
  let fixture: ComponentFixture<AllassetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllassetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllassetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

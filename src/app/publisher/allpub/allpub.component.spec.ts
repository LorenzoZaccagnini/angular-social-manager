import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpubComponent } from './allpub.component';

describe('AllpubComponent', () => {
  let component: AllpubComponent;
  let fixture: ComponentFixture<AllpubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllpubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

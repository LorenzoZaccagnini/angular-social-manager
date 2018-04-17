import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllproposalComponent } from './allproposal.component';

describe('AllproposalComponent', () => {
  let component: AllproposalComponent;
  let fixture: ComponentFixture<AllproposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllproposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllproposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

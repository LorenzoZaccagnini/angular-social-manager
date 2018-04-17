import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproposalComponent } from './addproposal.component';

describe('AddproposalComponent', () => {
  let component: AddproposalComponent;
  let fixture: ComponentFixture<AddproposalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddproposalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproposalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

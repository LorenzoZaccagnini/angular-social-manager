import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcampaignComponent } from './allcampaign.component';

describe('AllcampaignComponent', () => {
  let component: AllcampaignComponent;
  let fixture: ComponentFixture<AllcampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

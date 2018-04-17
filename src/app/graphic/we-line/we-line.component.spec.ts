import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeLineComponent } from './we-line.component';

describe('WeLineComponent', () => {
  let component: WeLineComponent;
  let fixture: ComponentFixture<WeLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

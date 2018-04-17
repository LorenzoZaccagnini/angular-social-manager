import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeTitleComponent } from './we-title.component';

describe('WeTitleComponent', () => {
  let component: WeTitleComponent;
  let fixture: ComponentFixture<WeTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

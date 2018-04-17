import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllagencyComponent } from './allagency.component';

describe('AllagencyComponent', () => {
  let component: AllagencyComponent;
  let fixture: ComponentFixture<AllagencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllagencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllagencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

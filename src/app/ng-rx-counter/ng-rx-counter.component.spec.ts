import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxCounterComponent } from './ng-rx-counter.component';

describe('NgRxCounterComponent', () => {
  let component: NgRxCounterComponent;
  let fixture: ComponentFixture<NgRxCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgRxCounterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgRxCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

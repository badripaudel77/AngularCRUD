import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperAddressComponent } from './developer-address.component';

describe('DeveloperAddressComponent', () => {
  let component: DeveloperAddressComponent;
  let fixture: ComponentFixture<DeveloperAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperAddressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

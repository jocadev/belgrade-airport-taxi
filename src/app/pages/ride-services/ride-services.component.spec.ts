import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RideServicesComponent } from './ride-services.component';

describe('RideServicesComponent', () => {
  let component: RideServicesComponent;
  let fixture: ComponentFixture<RideServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RideServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RideServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

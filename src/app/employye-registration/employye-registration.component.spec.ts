import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployyeRegistrationComponent } from './employye-registration.component';

describe('EmployyeRegistrationComponent', () => {
  let component: EmployyeRegistrationComponent;
  let fixture: ComponentFixture<EmployyeRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployyeRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployyeRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IMDbComponent } from './imdb.component';

describe('IMDbComponent', () => {
  let component: IMDbComponent;
  let fixture: ComponentFixture<IMDbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IMDbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IMDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

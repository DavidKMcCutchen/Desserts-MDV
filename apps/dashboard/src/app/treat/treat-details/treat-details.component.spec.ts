import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatDetailsComponent } from './treat-details.component';

describe('TreatDetailsComponent', () => {
  let component: TreatDetailsComponent;
  let fixture: ComponentFixture<TreatDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreatDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

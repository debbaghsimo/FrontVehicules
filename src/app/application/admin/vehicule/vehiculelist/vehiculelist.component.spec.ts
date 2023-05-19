import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculelistComponent } from './vehiculelist.component';

describe('VehiculelistComponent', () => {
  let component: VehiculelistComponent;
  let fixture: ComponentFixture<VehiculelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

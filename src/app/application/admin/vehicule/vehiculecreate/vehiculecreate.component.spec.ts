import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculecreateComponent } from './vehiculecreate.component';

describe('VehiculecreateComponent', () => {
  let component: VehiculecreateComponent;
  let fixture: ComponentFixture<VehiculecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculecreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

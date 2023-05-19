import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimecreateComponent } from './timecreate.component';

describe('TimecreateComponent', () => {
  let component: TimecreateComponent;
  let fixture: ComponentFixture<TimecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimecreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

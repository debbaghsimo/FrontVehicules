import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginecreateComponent } from './enginecreate.component';

describe('EnginecreateComponent', () => {
  let component: EnginecreateComponent;
  let fixture: ComponentFixture<EnginecreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnginecreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnginecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

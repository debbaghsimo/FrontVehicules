import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpertingcharcreateComponent } from './opertingcharcreate.component';

describe('OpertingcharcreateComponent', () => {
  let component: OpertingcharcreateComponent;
  let fixture: ComponentFixture<OpertingcharcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpertingcharcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpertingcharcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

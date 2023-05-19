import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsommationcreateComponent } from './consommationcreate.component';

describe('ConsommationcreateComponent', () => {
  let component: ConsommationcreateComponent;
  let fixture: ComponentFixture<ConsommationcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsommationcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsommationcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

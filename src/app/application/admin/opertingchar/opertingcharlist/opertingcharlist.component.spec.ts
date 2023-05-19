import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpertingcharlistComponent } from './opertingcharlist.component';

describe('OpertingcharlistComponent', () => {
  let component: OpertingcharlistComponent;
  let fixture: ComponentFixture<OpertingcharlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpertingcharlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpertingcharlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

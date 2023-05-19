import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnginelistComponent } from './enginelist.component';

describe('EnginelistComponent', () => {
  let component: EnginelistComponent;
  let fixture: ComponentFixture<EnginelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnginelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnginelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsommationlistComponent } from './consommationlist.component';

describe('ConsommationlistComponent', () => {
  let component: ConsommationlistComponent;
  let fixture: ComponentFixture<ConsommationlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsommationlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsommationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

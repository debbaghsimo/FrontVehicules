import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurlistComponent } from './utilisateurlist.component';

describe('UtilisateurlistComponent', () => {
  let component: UtilisateurlistComponent;
  let fixture: ComponentFixture<UtilisateurlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtilisateurlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

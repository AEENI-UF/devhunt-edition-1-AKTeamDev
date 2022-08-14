import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteNavbarComponent } from './compte-navbar.component';

describe('CompteNavbarComponent', () => {
  let component: CompteNavbarComponent;
  let fixture: ComponentFixture<CompteNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

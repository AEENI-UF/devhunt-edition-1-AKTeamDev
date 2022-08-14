import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfDeleteComponent } from './conf-delete.component';

describe('ConfDeleteComponent', () => {
  let component: ConfDeleteComponent;
  let fixture: ComponentFixture<ConfDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

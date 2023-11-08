import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarHabitacionComponent } from './registrar-habitacion.component';

describe('RegistrarHabitacionComponent', () => {
  let component: RegistrarHabitacionComponent;
  let fixture: ComponentFixture<RegistrarHabitacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrarHabitacionComponent]
    });
    fixture = TestBed.createComponent(RegistrarHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

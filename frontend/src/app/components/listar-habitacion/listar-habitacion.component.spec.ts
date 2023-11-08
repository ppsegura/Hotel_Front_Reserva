import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHabitacionComponent } from './listar-habitacion.component';

describe('ListarHabitacionComponent', () => {
  let component: ListarHabitacionComponent;
  let fixture: ComponentFixture<ListarHabitacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarHabitacionComponent]
    });
    fixture = TestBed.createComponent(ListarHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

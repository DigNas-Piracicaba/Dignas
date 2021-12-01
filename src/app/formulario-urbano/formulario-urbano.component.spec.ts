import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioUrbanoComponent } from './formulario-urbano.component';

describe('FormularioUrbanoComponent', () => {
  let component: FormularioUrbanoComponent;
  let fixture: ComponentFixture<FormularioUrbanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioUrbanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioUrbanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

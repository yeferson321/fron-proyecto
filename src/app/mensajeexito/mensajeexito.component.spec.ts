import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeexitoComponent } from './mensajeexito.component';

describe('MensajeexitoComponent', () => {
  let component: MensajeexitoComponent;
  let fixture: ComponentFixture<MensajeexitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeexitoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajeexitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

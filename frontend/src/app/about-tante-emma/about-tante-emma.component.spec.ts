import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTanteEmmaComponent } from './about-tante-emma.component';

describe('AboutTanteEmmaComponent', () => {
  let component: AboutTanteEmmaComponent;
  let fixture: ComponentFixture<AboutTanteEmmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTanteEmmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTanteEmmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

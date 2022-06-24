import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriasCadastradasComponent } from './categorias-cadastradas.component';

describe('CategoriasCadastradasComponent', () => {
  let component: CategoriasCadastradasComponent;
  let fixture: ComponentFixture<CategoriasCadastradasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriasCadastradasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriasCadastradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

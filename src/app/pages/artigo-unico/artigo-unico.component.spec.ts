import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtigoUnicoComponent } from './artigo-unico.component';

describe('ArtigoUnicoComponent', () => {
  let component: ArtigoUnicoComponent;
  let fixture: ComponentFixture<ArtigoUnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtigoUnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtigoUnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForunsCadastradosComponent } from './foruns-cadastrados.component';

describe('ForunsCadastradosComponent', () => {
  let component: ForunsCadastradosComponent;
  let fixture: ComponentFixture<ForunsCadastradosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForunsCadastradosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForunsCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

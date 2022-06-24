import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumExibicaoComponent } from './forum-exibicao.component';

describe('ForumExibicaoComponent', () => {
  let component: ForumExibicaoComponent;
  let fixture: ComponentFixture<ForumExibicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumExibicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumExibicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

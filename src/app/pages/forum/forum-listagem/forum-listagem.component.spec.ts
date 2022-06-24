import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumListagemComponent } from './forum-listagem.component';

describe('ForumListagemComponent', () => {
  let component: ForumListagemComponent;
  let fixture: ComponentFixture<ForumListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

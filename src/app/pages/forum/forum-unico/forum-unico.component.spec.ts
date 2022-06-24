import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumUnicoComponent } from './forum-unico.component';

describe('ForumUnicoComponent', () => {
  let component: ForumUnicoComponent;
  let fixture: ComponentFixture<ForumUnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumUnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumUnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

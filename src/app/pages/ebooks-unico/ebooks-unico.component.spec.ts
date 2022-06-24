import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbooksUnicoComponent } from './ebooks-unico.component';

describe('EbooksUnicoComponent', () => {
  let component: EbooksUnicoComponent;
  let fixture: ComponentFixture<EbooksUnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbooksUnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbooksUnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualUnicoComponent } from './manual-unico.component';

describe('ManualUnicoComponent', () => {
  let component: ManualUnicoComponent;
  let fixture: ComponentFixture<ManualUnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualUnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualUnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerUnicoComponent } from './banner-unico.component';

describe('BannerUnicoComponent', () => {
  let component: BannerUnicoComponent;
  let fixture: ComponentFixture<BannerUnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerUnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerUnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

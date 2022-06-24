import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoUnicoComponent } from './video-unico.component';

describe('VideoUnicoComponent', () => {
  let component: VideoUnicoComponent;
  let fixture: ComponentFixture<VideoUnicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoUnicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoUnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

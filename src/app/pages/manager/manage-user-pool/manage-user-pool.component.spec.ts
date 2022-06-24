import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUserPoolComponent } from './manage-user-pool.component';

describe('ManageUserPoolComponent', () => {
  let component: ManageUserPoolComponent;
  let fixture: ComponentFixture<ManageUserPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageUserPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageUserPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

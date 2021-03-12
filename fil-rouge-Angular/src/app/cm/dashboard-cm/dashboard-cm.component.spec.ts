import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCmComponent } from './dashboard-cm.component';

describe('DashboardCmComponent', () => {
  let component: DashboardCmComponent;
  let fixture: ComponentFixture<DashboardCmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

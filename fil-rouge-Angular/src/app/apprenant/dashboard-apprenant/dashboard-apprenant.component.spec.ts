import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardApprenantComponent } from './dashboard-apprenant.component';

describe('DashboardApprenantComponent', () => {
  let component: DashboardApprenantComponent;
  let fixture: ComponentFixture<DashboardApprenantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardApprenantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

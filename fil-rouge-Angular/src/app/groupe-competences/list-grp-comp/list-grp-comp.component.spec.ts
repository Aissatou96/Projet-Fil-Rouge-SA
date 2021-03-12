import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGrpCompComponent } from './list-grp-comp.component';

describe('ListGrpCompComponent', () => {
  let component: ListGrpCompComponent;
  let fixture: ComponentFixture<ListGrpCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListGrpCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGrpCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

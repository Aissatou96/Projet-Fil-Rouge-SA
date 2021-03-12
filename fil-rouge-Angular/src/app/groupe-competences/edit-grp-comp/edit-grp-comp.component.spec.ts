import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGrpCompComponent } from './edit-grp-comp.component';

describe('EditGrpCompComponent', () => {
  let component: EditGrpCompComponent;
  let fixture: ComponentFixture<EditGrpCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGrpCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGrpCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

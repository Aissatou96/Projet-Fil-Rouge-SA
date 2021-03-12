import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGrpCompComponent } from './create-grp-comp.component';

describe('CreateGrpCompComponent', () => {
  let component: CreateGrpCompComponent;
  let fixture: ComponentFixture<CreateGrpCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGrpCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGrpCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

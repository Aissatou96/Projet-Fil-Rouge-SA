import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemGrpCompComponent } from './item-grp-comp.component';

describe('ItemGrpCompComponent', () => {
  let component: ItemGrpCompComponent;
  let fixture: ComponentFixture<ItemGrpCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemGrpCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemGrpCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

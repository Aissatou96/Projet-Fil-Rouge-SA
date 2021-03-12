import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfilSortieComponent } from './create-profil-sortie.component';

describe('CreateProfilSortieComponent', () => {
  let component: CreateProfilSortieComponent;
  let fixture: ComponentFixture<CreateProfilSortieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProfilSortieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfilSortieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

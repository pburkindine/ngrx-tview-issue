import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Passable1Component } from './passable1.component';

describe('Passable1Component', () => {
  let component: Passable1Component;
  let fixture: ComponentFixture<Passable1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Passable1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Passable1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

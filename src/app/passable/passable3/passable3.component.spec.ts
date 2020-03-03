import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Passable3Component } from './passable3.component';

describe('Passable3Component', () => {
  let component: Passable3Component;
  let fixture: ComponentFixture<Passable3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Passable3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Passable3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

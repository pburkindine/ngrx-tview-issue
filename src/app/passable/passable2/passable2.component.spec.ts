import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Passable2Component } from './passable2.component';

describe('Passable2Component', () => {
  let component: Passable2Component;
  let fixture: ComponentFixture<Passable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Passable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Passable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

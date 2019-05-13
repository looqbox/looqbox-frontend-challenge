import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokefinderComponent } from './pokefinder.component';

describe('PokefinderComponent', () => {
  let component: PokefinderComponent;
  let fixture: ComponentFixture<PokefinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokefinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokefinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

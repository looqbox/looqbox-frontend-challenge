import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeInfosComponent } from './pokeinfo.component';

describe('PokeInfosComponent', () => {
  let component: PokeInfosComponent;
  let fixture: ComponentFixture<PokeInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokeInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

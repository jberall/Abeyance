import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuredNameComponent } from './insured-name.component';

describe('InsuredNameComponent', () => {
  let component: InsuredNameComponent;
  let fixture: ComponentFixture<InsuredNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuredNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuredNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

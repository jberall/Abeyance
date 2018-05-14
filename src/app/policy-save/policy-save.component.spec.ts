import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicySaveComponent } from './policy-save.component';

describe('PolicySaveComponent', () => {
  let component: PolicySaveComponent;
  let fixture: ComponentFixture<PolicySaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicySaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicySaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

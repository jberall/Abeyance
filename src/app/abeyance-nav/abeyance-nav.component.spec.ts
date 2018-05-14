
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbeyanceNavComponent } from './abeyance-nav.component';

describe('AbeyanceNavComponent', () => {
  let component: AbeyanceNavComponent;
  let fixture: ComponentFixture<AbeyanceNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AbeyanceNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbeyanceNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});

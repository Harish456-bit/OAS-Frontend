import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtrocorComponent } from './protrocor.component';

describe('ProtrocorComponent', () => {
  let component: ProtrocorComponent;
  let fixture: ComponentFixture<ProtrocorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtrocorComponent]
    });
    fixture = TestBed.createComponent(ProtrocorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeviserComponent } from './beviser.component';

describe('BeviserComponent', () => {
  let component: BeviserComponent;
  let fixture: ComponentFixture<BeviserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeviserComponent]
    });
    fixture = TestBed.createComponent(BeviserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

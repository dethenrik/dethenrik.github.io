import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpgaverComponent } from './opgaver.component';

describe('OpgaverComponent', () => {
  let component: OpgaverComponent;
  let fixture: ComponentFixture<OpgaverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpgaverComponent]
    });
    fixture = TestBed.createComponent(OpgaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

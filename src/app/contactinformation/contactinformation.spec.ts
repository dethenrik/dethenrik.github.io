import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactinformation } from './contactinformation';

describe('Contactinformation', () => {
  let component: Contactinformation;
  let fixture: ComponentFixture<Contactinformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contactinformation],
    }).compileComponents();

    fixture = TestBed.createComponent(Contactinformation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

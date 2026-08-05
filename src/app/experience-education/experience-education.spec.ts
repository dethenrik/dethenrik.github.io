import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceEducation } from './experience-education';

describe('ExperienceEducation', () => {
  let component: ExperienceEducation;
  let fixture: ComponentFixture<ExperienceEducation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperienceEducation],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceEducation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

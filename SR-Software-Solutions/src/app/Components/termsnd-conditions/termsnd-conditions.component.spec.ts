import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsndConditionsComponent } from './termsnd-conditions.component';

describe('TermsndConditionsComponent', () => {
  let component: TermsndConditionsComponent;
  let fixture: ComponentFixture<TermsndConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TermsndConditionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsndConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

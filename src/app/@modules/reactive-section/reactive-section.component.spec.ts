import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { ReactiveSectionComponent } from './reactive-section.component';

describe('ReactiveSectionComponent', () => {
  let component: ReactiveSectionComponent;
  let fixture: ComponentFixture<ReactiveSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReactiveSectionComponent],
      imports: [
        ReactiveFormsModule
      ],
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReactiveSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

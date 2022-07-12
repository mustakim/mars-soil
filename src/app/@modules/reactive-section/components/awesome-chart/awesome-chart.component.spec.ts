import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeChartComponent } from './awesome-chart.component';

describe('AwesomeChartComponent', () => {
  let component: AwesomeChartComponent;
  let fixture: ComponentFixture<AwesomeChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwesomeChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwesomeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

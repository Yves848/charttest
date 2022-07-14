import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightchartComponent } from './weightchart.component';

describe('WeightchartComponent', () => {
  let component: WeightchartComponent;
  let fixture: ComponentFixture<WeightchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeightchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

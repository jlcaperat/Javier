import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkWaterComponent } from './mark-water.component';

describe('MarkWaterComponent', () => {
  let component: MarkWaterComponent;
  let fixture: ComponentFixture<MarkWaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarkWaterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarkWaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

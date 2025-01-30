import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouresDetailsComponent } from './coures-details.component';

describe('CouresDetailsComponent', () => {
  let component: CouresDetailsComponent;
  let fixture: ComponentFixture<CouresDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouresDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnandCampusComponent } from './anand-campus.component';

describe('AnandCampusComponent', () => {
  let component: AnandCampusComponent;
  let fixture: ComponentFixture<AnandCampusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnandCampusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnandCampusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

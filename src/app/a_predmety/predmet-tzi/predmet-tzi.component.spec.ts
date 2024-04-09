import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetTZIComponent } from './predmet-tzi.component';

describe('PredmetTZIComponent', () => {
  let component: PredmetTZIComponent;
  let fixture: ComponentFixture<PredmetTZIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredmetTZIComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PredmetTZIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

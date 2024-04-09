import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetMATComponent } from './predmet-mat.component';

describe('PredmetMATComponent', () => {
  let component: PredmetMATComponent;
  let fixture: ComponentFixture<PredmetMATComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredmetMATComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PredmetMATComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetyHostComponent } from './predmety-host.component';

describe('PredmetyHostComponent', () => {
  let component: PredmetyHostComponent;
  let fixture: ComponentFixture<PredmetyHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredmetyHostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PredmetyHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

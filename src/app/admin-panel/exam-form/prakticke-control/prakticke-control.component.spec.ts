import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PraktickeControlComponent } from './prakticke-control.component';

describe('PraktickeControlComponent', () => {
  let component: PraktickeControlComponent;
  let fixture: ComponentFixture<PraktickeControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PraktickeControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PraktickeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

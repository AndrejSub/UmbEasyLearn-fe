import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcControlComponent } from './abc-control.component';

describe('AbcControlComponent', () => {
  let component: AbcControlComponent;
  let fixture: ComponentFixture<AbcControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbcControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbcControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

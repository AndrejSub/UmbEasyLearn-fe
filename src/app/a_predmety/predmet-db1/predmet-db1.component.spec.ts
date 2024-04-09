import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetDB1Component } from './predmet-db1.component';

describe('PredmetDB1Component', () => {
  let component: PredmetDB1Component;
  let fixture: ComponentFixture<PredmetDB1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredmetDB1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PredmetDB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

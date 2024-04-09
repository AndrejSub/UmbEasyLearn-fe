import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredmetAlgo2Component } from './predmet-algo2.component';

describe('PredmetAlgo2Component', () => {
  let component: PredmetAlgo2Component;
  let fixture: ComponentFixture<PredmetAlgo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PredmetAlgo2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PredmetAlgo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

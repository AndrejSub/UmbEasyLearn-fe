import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResethesloComponent } from './resetheslo.component';

describe('ResethesloComponent', () => {
  let component: ResethesloComponent;
  let fixture: ComponentFixture<ResethesloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResethesloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResethesloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

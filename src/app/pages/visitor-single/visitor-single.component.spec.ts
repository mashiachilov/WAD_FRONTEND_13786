import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorSingleComponent } from './visitor-single.component';

describe('VisitorSingleComponent', () => {
  let component: VisitorSingleComponent;
  let fixture: ComponentFixture<VisitorSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitorSingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitorSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

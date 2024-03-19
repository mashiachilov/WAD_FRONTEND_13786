import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorEditComponent } from './visitor-edit.component';

describe('VisitorEditComponent', () => {
  let component: VisitorEditComponent;
  let fixture: ComponentFixture<VisitorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisitorEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisitorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

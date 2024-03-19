import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptsSingleComponent } from './recepts-single.component';

describe('ReceptsSingleComponent', () => {
  let component: ReceptsSingleComponent;
  let fixture: ComponentFixture<ReceptsSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptsSingleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceptsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

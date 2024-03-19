import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptsEditComponent } from './recepts-edit.component';

describe('ReceptsEditComponent', () => {
  let component: ReceptsEditComponent;
  let fixture: ComponentFixture<ReceptsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptsEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceptsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

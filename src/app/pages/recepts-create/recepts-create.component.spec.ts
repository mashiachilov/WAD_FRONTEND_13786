import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptsCreateComponent } from './recepts-create.component';

describe('ReceptsCreateComponent', () => {
  let component: ReceptsCreateComponent;
  let fixture: ComponentFixture<ReceptsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceptsCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReceptsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentStudentComponent } from './parent-student.component';

describe('ParentStudentComponent', () => {
  let component: ParentStudentComponent;
  let fixture: ComponentFixture<ParentStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

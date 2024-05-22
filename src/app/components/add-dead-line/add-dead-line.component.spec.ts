import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeadLineComponent } from './add-dead-line.component';

describe('AddDeadLineComponent', () => {
  let component: AddDeadLineComponent;
  let fixture: ComponentFixture<AddDeadLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDeadLineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDeadLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuoterComponent } from './cuoter.component';

describe('CuoterComponent', () => {
  let component: CuoterComponent;
  let fixture: ComponentFixture<CuoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuoterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

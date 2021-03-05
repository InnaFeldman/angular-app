import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallestNumberComponent } from './smallest-number.component';

describe('SmallestNumberComponent', () => {
  let component: SmallestNumberComponent;
  let fixture: ComponentFixture<SmallestNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallestNumberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallestNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

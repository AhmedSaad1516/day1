import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeloComponent } from './helo.component';

describe('HeloComponent', () => {
  let component: HeloComponent;
  let fixture: ComponentFixture<HeloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeloComponent]
    });
    fixture = TestBed.createComponent(HeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

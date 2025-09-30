import { ComponentFixture, TestBed } from '@angular/core/testing';

import { simplecrmComponent } from './simplecrm.component';

describe('simplecrmComponent', () => {
  let component: simplecrmComponent;
  let fixture: ComponentFixture<simplecrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [simplecrmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(simplecrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

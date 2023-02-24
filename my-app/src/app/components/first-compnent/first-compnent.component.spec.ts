import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCompnentComponent } from './first-compnent.component';

describe('FirstCompnentComponent', () => {
  let component: FirstCompnentComponent;
  let fixture: ComponentFixture<FirstCompnentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstCompnentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstCompnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

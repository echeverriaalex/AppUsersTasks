import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAuthComponent } from './main-auth.component';

describe('MainAuthComponent', () => {
  let component: MainAuthComponent;
  let fixture: ComponentFixture<MainAuthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainAuthComponent]
    });
    fixture = TestBed.createComponent(MainAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

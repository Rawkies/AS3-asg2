import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mobile12Page } from './mobile12.page';

describe('Mobile12Page', () => {
  let component: Mobile12Page;
  let fixture: ComponentFixture<Mobile12Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mobile12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

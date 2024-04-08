import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mobile10Page } from './mobile10.page';

describe('Mobile10Page', () => {
  let component: Mobile10Page;
  let fixture: ComponentFixture<Mobile10Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mobile10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

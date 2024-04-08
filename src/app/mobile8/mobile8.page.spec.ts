import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mobile8Page } from './mobile8.page';

describe('Mobile8Page', () => {
  let component: Mobile8Page;
  let fixture: ComponentFixture<Mobile8Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mobile8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

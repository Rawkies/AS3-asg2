import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mobile17Page } from './mobile17.page';

describe('Mobile17Page', () => {
  let component: Mobile17Page;
  let fixture: ComponentFixture<Mobile17Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mobile17Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

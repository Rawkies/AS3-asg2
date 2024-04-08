import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mobile4Page } from './mobile4.page';

describe('Mobile4Page', () => {
  let component: Mobile4Page;
  let fixture: ComponentFixture<Mobile4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mobile4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

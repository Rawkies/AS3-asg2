import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mobile13Page } from './mobile13.page';

describe('Mobile13Page', () => {
  let component: Mobile13Page;
  let fixture: ComponentFixture<Mobile13Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mobile13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

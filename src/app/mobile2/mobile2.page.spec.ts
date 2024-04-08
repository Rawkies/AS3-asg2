import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mobile2Page } from './mobile2.page';

describe('Mobile2Page', () => {
  let component: Mobile2Page;
  let fixture: ComponentFixture<Mobile2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mobile2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

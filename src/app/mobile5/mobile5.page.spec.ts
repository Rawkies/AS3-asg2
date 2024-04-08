import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mobile5Page } from './mobile5.page';

describe('Mobile5Page', () => {
  let component: Mobile5Page;
  let fixture: ComponentFixture<Mobile5Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mobile5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

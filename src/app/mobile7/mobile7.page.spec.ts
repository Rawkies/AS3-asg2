import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mobile7Page } from './mobile7.page';

describe('Mobile7Page', () => {
  let component: Mobile7Page;
  let fixture: ComponentFixture<Mobile7Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mobile7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

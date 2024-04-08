import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mobile11Page } from './mobile11.page';

describe('Mobile11Page', () => {
  let component: Mobile11Page;
  let fixture: ComponentFixture<Mobile11Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mobile11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

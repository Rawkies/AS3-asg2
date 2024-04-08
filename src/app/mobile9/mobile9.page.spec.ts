import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mobile9Page } from './mobile9.page';

describe('Mobile9Page', () => {
  let component: Mobile9Page;
  let fixture: ComponentFixture<Mobile9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mobile9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

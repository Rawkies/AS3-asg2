import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mobile16Page } from './mobile16.page';

describe('Mobile16Page', () => {
  let component: Mobile16Page;
  let fixture: ComponentFixture<Mobile16Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mobile16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

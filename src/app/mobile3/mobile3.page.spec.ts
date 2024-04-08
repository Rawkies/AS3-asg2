import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mobile3Page } from './mobile3.page';

describe('Mobile3Page', () => {
  let component: Mobile3Page;
  let fixture: ComponentFixture<Mobile3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mobile3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mobile6Page } from './mobile6.page';

describe('Mobile6Page', () => {
  let component: Mobile6Page;
  let fixture: ComponentFixture<Mobile6Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mobile6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

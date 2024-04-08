import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mobile15Page } from './mobile15.page';

describe('Mobile15Page', () => {
  let component: Mobile15Page;
  let fixture: ComponentFixture<Mobile15Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mobile15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

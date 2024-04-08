import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mobile14Page } from './mobile14.page';

describe('Mobile14Page', () => {
  let component: Mobile14Page;
  let fixture: ComponentFixture<Mobile14Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mobile14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

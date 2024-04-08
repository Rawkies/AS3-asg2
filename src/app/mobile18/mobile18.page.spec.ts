import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mobile18Page } from './mobile18.page';

describe('Mobile18Page', () => {
  let component: Mobile18Page;
  let fixture: ComponentFixture<Mobile18Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Mobile18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

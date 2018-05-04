import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormComponent } from './simple-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('SimpleFormComponent', () => {
  let component: SimpleFormComponent;
  let fixture: ComponentFixture<SimpleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleFormComponent ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

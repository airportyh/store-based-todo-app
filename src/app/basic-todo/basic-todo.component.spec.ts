import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTodoComponent } from './basic-todo.component';

describe('BasicTodoComponent', () => {
  let component: BasicTodoComponent;
  let fixture: ComponentFixture<BasicTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

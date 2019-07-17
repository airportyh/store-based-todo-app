import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTodoItemComponent } from './basic-todo-item.component';

describe('BasicTodoItemComponent', () => {
  let component: BasicTodoItemComponent;
  let fixture: ComponentFixture<BasicTodoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTodoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

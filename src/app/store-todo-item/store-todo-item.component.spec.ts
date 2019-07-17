import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTodoItemComponent } from './store-todo-item.component';

describe('StoreTodoItemComponent', () => {
  let component: StoreTodoItemComponent;
  let fixture: ComponentFixture<StoreTodoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreTodoItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

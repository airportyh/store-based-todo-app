import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreTodoComponent } from './store-todo.component';

describe('StoreTodoComponent', () => {
  let component: StoreTodoComponent;
  let fixture: ComponentFixture<StoreTodoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreTodoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

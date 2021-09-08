import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialformComponent } from './materialform.component';

describe('MaterialformComponent', () => {
  let component: MaterialformComponent;
  let fixture: ComponentFixture<MaterialformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

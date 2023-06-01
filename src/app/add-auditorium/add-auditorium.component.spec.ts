import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAuditoriumComponent } from './add-auditorium.component';

describe('AddAuditoriumComponent', () => {
  let component: AddAuditoriumComponent;
  let fixture: ComponentFixture<AddAuditoriumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAuditoriumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAuditoriumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArtPtgComponent } from './add-art-ptg.component';

describe('AddArtPtgComponent', () => {
  let component: AddArtPtgComponent;
  let fixture: ComponentFixture<AddArtPtgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArtPtgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArtPtgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

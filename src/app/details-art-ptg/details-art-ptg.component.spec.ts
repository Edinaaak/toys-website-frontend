import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsArtPtgComponent } from './details-art-ptg.component';

describe('DetailsArtPtgComponent', () => {
  let component: DetailsArtPtgComponent;
  let fixture: ComponentFixture<DetailsArtPtgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsArtPtgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsArtPtgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

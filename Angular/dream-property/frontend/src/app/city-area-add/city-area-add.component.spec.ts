import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityAreaAddComponent } from './city-area-add.component';

describe('CityAreaAddComponent', () => {
  let component: CityAreaAddComponent;
  let fixture: ComponentFixture<CityAreaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityAreaAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityAreaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

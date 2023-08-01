import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropAddComponent } from './prop-add.component';

describe('PropAddComponent', () => {
  let component: PropAddComponent;
  let fixture: ComponentFixture<PropAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

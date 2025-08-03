import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataInput } from './data-input';

describe('DataInput', () => {
  let component: DataInput;
  let fixture: ComponentFixture<DataInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransctionsComponent } from './transctions.component';

describe('TransctionsComponent', () => {
  let component: TransctionsComponent;
  let fixture: ComponentFixture<TransctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

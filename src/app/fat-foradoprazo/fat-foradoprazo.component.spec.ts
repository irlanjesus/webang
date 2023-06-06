import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatForadoprazoComponent } from './fat-foradoprazo.component';

describe('FatForadoprazoComponent', () => {
  let component: FatForadoprazoComponent;
  let fixture: ComponentFixture<FatForadoprazoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FatForadoprazoComponent]
    });
    fixture = TestBed.createComponent(FatForadoprazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

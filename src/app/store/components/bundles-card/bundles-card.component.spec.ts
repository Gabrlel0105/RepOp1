import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundlesCardComponent } from './bundles-card.component';

describe('BundlesCardComponent', () => {
  let component: BundlesCardComponent;
  let fixture: ComponentFixture<BundlesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BundlesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BundlesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

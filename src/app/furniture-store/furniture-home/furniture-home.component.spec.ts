import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureHomeComponent } from './furniture-home.component';

describe('FurnitureHomeComponent', () => {
  let component: FurnitureHomeComponent;
  let fixture: ComponentFixture<FurnitureHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FurnitureHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnitureHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

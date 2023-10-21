import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsItemComponent } from './socials-item.component';

describe('SocialsItemComponent', () => {
  let component: SocialsItemComponent;
  let fixture: ComponentFixture<SocialsItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialsItemComponent]
    });
    fixture = TestBed.createComponent(SocialsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

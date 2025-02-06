import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenderCreateComponent } from './sender-create.component';

describe('SenderCreateComponent', () => {
  let component: SenderCreateComponent;
  let fixture: ComponentFixture<SenderCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenderCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenderCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

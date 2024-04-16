import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TorteComponent } from './torte.component';

describe('TorteComponent', () => {
  let component: TorteComponent;
  let fixture: ComponentFixture<TorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TorteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

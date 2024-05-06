import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidTablaComponent } from './covid-tabla.component';

describe('CovidTablaComponent', () => {
  let component: CovidTablaComponent;
  let fixture: ComponentFixture<CovidTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CovidTablaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CovidTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

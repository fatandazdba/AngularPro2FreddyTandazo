import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanchasinteticaComponent } from './canchasintetica.component';

describe('CanchasinteticaComponent', () => {
  let component: CanchasinteticaComponent;
  let fixture: ComponentFixture<CanchasinteticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanchasinteticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanchasinteticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingDetalheComponent } from './data-binding-detalhe.component';

describe('DataBindingDetalheComponent', () => {
  let component: DataBindingDetalheComponent;
  let fixture: ComponentFixture<DataBindingDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataBindingDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

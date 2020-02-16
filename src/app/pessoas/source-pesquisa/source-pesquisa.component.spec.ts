import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcePesquisaComponent } from './source-pesquisa.component';

describe('SourcePesquisaComponent', () => {
  let component: SourcePesquisaComponent;
  let fixture: ComponentFixture<SourcePesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcePesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcePesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

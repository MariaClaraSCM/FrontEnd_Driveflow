import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroInstrutor } from './cadastro-instrutor';

describe('CadastroInstrutor', () => {
  let component: CadastroInstrutor;
  let fixture: ComponentFixture<CadastroInstrutor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroInstrutor],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroInstrutor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

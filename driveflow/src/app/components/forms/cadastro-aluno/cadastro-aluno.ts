import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-aluno',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-aluno.html',
  styleUrl: './cadastro-aluno.css',
})
export class CadastroAluno implements OnInit {

  private fb = inject(FormBuilder);

  form = this.fb.group({
    cpf: [''],
    senha: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[^\s]+$/)
      ]
    ]
  });

  // ✅ lifecycle hook separado
  ngOnInit() {
    this.form.get('cpf')?.valueChanges.subscribe(value => {
      const formatted = this.formatCPF(value);

      if (value !== formatted) {
        this.form.get('cpf')?.setValue(formatted, { emitEvent: false });
      }
    });
  }

  // ✅ função separada
  formatCPF(value: string | null): string {
    if (!value) return '';

    value = value.replace(/\D/g, '');
    value = value.slice(0, 11);

    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    return value;
  }

  get senha() {
    return this.form.get('senha');
  }

  temMaiuscula() {
    return /[A-Z]/.test(this.senha?.value || '');
  }

  temMinuscula() {
    return /[a-z]/.test(this.senha?.value || '');
  }

  temNumero() {
    return /\d/.test(this.senha?.value || '');
  }

  temEspecial() {
    return /[\W_]/.test(this.senha?.value || '');
  }

  temTamanho() {
    return (this.senha?.value || '').length >= 8;
  }
}
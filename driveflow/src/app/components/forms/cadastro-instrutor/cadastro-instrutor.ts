import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-instrutor',
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro-instrutor.html',
  styleUrl: './cadastro-instrutor.css',
})
export class CadastroInstrutor {
  
  private fb = inject(FormBuilder);

    // ✅ form
  form = this.fb.group({
    senha: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[^\s]+$/)
      ]
    ]
  });

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

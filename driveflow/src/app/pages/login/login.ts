import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {

  // ✅ Injeção moderna
  private fb = inject(FormBuilder);

  // ✅ Agora funciona sem erro
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

  // Getter
  get senha() {
    return this.form.get('senha');
  }

  // ✅ Métodos de validação (fora do constructor)
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
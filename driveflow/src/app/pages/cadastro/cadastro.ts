import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { CadastroAluno } from '../../components/forms/cadastro-aluno/cadastro-aluno';
import { CadastroInstrutor } from '../../components/forms/cadastro-instrutor/cadastro-instrutor';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [RouterLink, CadastroAluno, CadastroInstrutor],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {

  private route = inject(ActivatedRoute);
  private router = inject(Router);

  // 🔥 tipo vindo da rota
  tipo: 'aluno' | 'instrutor' = 'aluno';

  ngOnInit() {
    this.route.params.subscribe(params => {
      const tipoParam = params['tipo'];

      this.tipo = tipoParam === 'instrutor' ? 'instrutor' : 'aluno';
    });
  }

  // 🔁 alterna entre os tipos via rota
  alternarTipo() {
    const novoTipo = this.tipo === 'aluno' ? 'instrutor' : 'aluno';
    this.router.navigate(['/cadastro', novoTipo]);
  }
}
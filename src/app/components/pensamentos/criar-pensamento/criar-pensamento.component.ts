import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.scss',
})
export class CriarPensamentoComponent {
  pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  criarPensamento() {
    alert('Pensamento criado com sucesso!');
  }

  cancelarPensamento() {
    alert('Pensamento cancelado!');
  }
}

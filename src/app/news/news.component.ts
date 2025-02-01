// src/app/news/news.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-news',
  imports: [CommonModule, RouterModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  news = [
    { title: 'NFL 2025: Novos times, novos desafios!', date: '31 de janeiro de 2025', link: 'https://www.dazn.com/pt-BR/news/american-football/nfl-2025-free-agency-tres-principais-jogadores-ofensivos-e-os-times-que-precisam-deles/caumesvm5bm81pblvq39fxitk' },
    { title: 'Quarterbacks de Elite: Quem são eles?', date: '29 de janeiro de 2025', link: 'https://www.espn.com.br/nfl/artigo/_/id/8939095/nfl-brady-mahomes-e-mais-quem-veja-o-top-10-de-quarterbacks-eleito-pela-propria-liga' },
    { title: 'Os 10 melhores jogos da temporada', date: '27 de janeiro de 2025', link: 'https://pt.linkedin.com/posts/lucasbonini_os-10-melhores-jogos-de-2024-da-nfl-activity-7202116955233751040-wWMY' },
    { title: 'Os favoritos para o Super Bowl LIX', date: '25 de janeiro de 2025', link: 'https://theplayoffs.news/noticias/palpites-nfl/melhores-palpites-para-o-super-bowl-lix-palpites-nfl/' },
    { title: 'O futuro dos running backs na NFL', date: '23 de janeiro de 2025', link: 'https://medium.com/caradossports/arquivo-por-que-running-backs-s%C3%A3o-t%C3%A3o-desvalorizados-na-nfl-atualmente-fc5e0536a4a9' },
    { title: 'Como a tecnologia está mudando o futebol americano', date: '21 de janeiro de 2025', link: 'https://sportinsider.com.br/como-a-tecnologia-escalavel-esta-impulsionando-os-planos-globais-da-nfl/' },
    { title: 'Os melhores jogadores do Pro Bowl 2025', date: '19 de janeiro de 2025', link: 'https://theplayoffs.news/noticias/nfl/nfl-pro-bowl-2025-atualizacao-lista-jogadores/' },
    { title: 'As maiores rivalidades da NFL', date: '17 de janeiro de 2025', link: 'https://blog.betway.com/pt/outros-esportes/nfl-as-10-maiores-rivalidades-do-futebol-americano/' },
    { title: 'Os recordes mais impressionantes da temporada', date: '15 de janeiro de 2025', link: 'https://www.espn.com.br/nfl/artigo/_/id/14615203/recordes-quebrados-playoffs-encaminhados-destaques-da-semana-17-da-nfl' },
    { title: 'Os melhores calouros de 2025', date: '13 de janeiro de 2025', link: 'https://www.espn.com.br/nfl/artigo/_/id/14678730/quem-sao-futuras-estrelas-nfl-conheca-quarterback-mais-badalado-draft-2025' }
  ];
}

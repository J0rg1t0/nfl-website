import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = 'Blog NFL BR';
  superBowl = {
    teams: ['Kansas City Chiefs', 'Philadelphia Eagles'],
    players: ['Patrick Mahomes', 'Jalen Hurts'],
    date: '12 de fevereiro de 2025',
    time: '20:00 (horário de Brasília)',
    stadium: 'State Farm Stadium, Glendale, Arizona',
    broadcast: [
      'ESPN',
      'Fox Sports',
      'Paramount+'
    ]
  };

  onNavigate(link: string) {
    if(link === 'superbowl') {  
      window.open('https://ge.globo.com/futebol-americano/nfl/noticia/2025/01/27/super-bowl-2025-data-e-horario-da-final-da-nfl.ghtml', '_blank');
    }
  }
}

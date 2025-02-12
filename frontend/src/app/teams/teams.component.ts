import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { RequestIntegrationService } from '../request-integration.service';
import { Team } from '../request-integration.interface';

@Component({
  selector: 'app-teams',
  imports: [CommonModule, CarouselModule, RouterModule],
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {
  constructor(
    private requestIntegrationService: RequestIntegrationService,
  ) {}

  teams: Team[] = [];
  
  async ngOnInit() {
    this.teams = await this.requestIntegrationService.getTeams();
    console.log(this.teams);
  }
}

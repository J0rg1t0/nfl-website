import { Component } from '@angular/core';
import { RequestIntegrationService } from '../request-integration.service';
import { Stadium } from '../request-integration.interface';
import { DecimalPipe, DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stadium',
  imports: [CommonModule, DecimalPipe, DatePipe],
  templateUrl: './stadium.component.html',
  styleUrl: './stadium.component.scss'
})

export class StadiumComponent {
  constructor(
    private requestIntegrationService: RequestIntegrationService,
  ) {}

  stadiums: Stadium[] = [];
  currentImageIndex: { [key: string]: number } = {};

  async ngOnInit() {
    this.stadiums = await this.requestIntegrationService.getStadiums();
    this.stadiums.forEach((stadium) => {
      this.currentImageIndex[stadium.name] = 0;
      setInterval(() => this.cycleImages(stadium.name), 3000);
    });
  }


  cycleImages(stadiumName: string) {
    this.currentImageIndex[stadiumName] =
      (this.currentImageIndex[stadiumName] + 1) % 3;
  }

}

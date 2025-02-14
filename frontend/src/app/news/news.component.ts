// src/app/news/news.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestIntegrationService } from '../request-integration.service';
import { News } from '../request-integration.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-news',
  imports: [CommonModule, RouterModule, DatePipe],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})


export class NewsComponent {
  constructor(
    private requestIntegrationService: RequestIntegrationService,
  ) {}

  news: News[] = [];

  async ngOnInit() {
    this.news = await this.requestIntegrationService.getNews();
  }

}

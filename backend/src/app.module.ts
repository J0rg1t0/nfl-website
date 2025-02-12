import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamsModule } from './team/teams.module';
import { NewsModule } from './news/news.module';
import { SuggestionsModule } from './suggestion/suggestions.module';
import { MailModule } from './mail/mail.module';
import { StadiumModule } from './stadium/stadium.module';
import { Team } from './team/entities/team.entity';
import { News } from './news/entities/news.entity';
import { Suggestion } from './suggestion/entities/suggestion.entity';
import { Mail } from './mail/entities/mail.entity';
import { Stadium } from './stadium/entities/stadium.entity';
import join from 'path';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db/db.sqlite',
      entities: [
        Team,
        News,
        Suggestion,
        Mail,
        Stadium
      ],
      // synchronize: true,
      migrations: [
        __dirname + '/migrations/*{.ts,.js}',
      ],
      migrationsRun: true,
      logging: true,
    }),
    TeamsModule,
    NewsModule,
    SuggestionsModule,
    MailModule,
    StadiumModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

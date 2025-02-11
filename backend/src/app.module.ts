import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamsModule } from './team/teams.module';
import { NewsModule } from './news/news.module';
import { SuggestionsModule } from './suggestion/suggestions.module';
import { MailModule } from './mail/mail.module';
import { StadiumModule } from './stadium/stadium.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [],
      synchronize: true,
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

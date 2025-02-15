import { Module } from '@nestjs/common';
import { SuggestionsService } from './suggestions.service';
import { SuggestionsController } from './suggestions.controller';
import { MailService } from 'src/mail/mail.service';

@Module({
  controllers: [SuggestionsController],
  providers: [SuggestionsService, MailService],
})
export class SuggestionsModule {}

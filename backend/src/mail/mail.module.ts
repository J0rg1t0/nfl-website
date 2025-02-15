import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule,
    MailerModule.forRootAsync(
      {
        useFactory: () => ({
          transport: {
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: false,
            pool: true,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS,
            },
              defaults: {
                from: '"No Reply" <' + process.env.MAIL_USER + '>',
              },
          },
        }),
      },
    ),
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}

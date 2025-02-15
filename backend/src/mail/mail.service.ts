import { Injectable } from '@nestjs/common';
import { CreateMailDto } from './dto/create-mail.dto';
import { UpdateMailDto } from './dto/update-mail.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { MailPayload } from './mail.interface';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
  ) {}

  async sendMail(mailPayload: MailPayload) {
    try {
      const envio = await this.mailerService.sendMail({
        to: process.env.MAIL_RECEIVER,
        from: `No Reply <${process.env.MAIL_USER}>`, 
        subject: mailPayload.subject, 
        text: mailPayload.text, 
      });
      return envio;
    } catch (error) {
      throw new Error(error);
    }
  }
  create(createMailDto: CreateMailDto) {
    return 'This action adds a new mail';
  }

  findAll() {
    return `This action returns all mail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mail`;
  }

  update(id: number, updateMailDto: UpdateMailDto) {
    return `This action updates a #${id} mail`;
  }

  remove(id: number) {
    return `This action removes a #${id} mail`;
  }
}

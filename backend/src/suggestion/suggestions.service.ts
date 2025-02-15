import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSuggestionDto } from './dto/create-suggestion.dto';
import { UpdateSuggestionDto } from './dto/update-suggestion.dto';
import { Suggestion } from './entities/suggestion.entity';
import { MailService } from 'src/mail/mail.service';
import { MailPayload } from 'src/mail/mail.interface';

@Injectable()
export class SuggestionsService {
  constructor(
    private readonly mailService: MailService,
  ) {}

  async create(createSuggestionDto: CreateSuggestionDto) {
    try {
      const mailPayload: MailPayload = {
        subject: createSuggestionDto.subject,
        text: createSuggestionDto.suggestion,
      };
      await Suggestion.insert(createSuggestionDto);     
      return await this.mailService.sendMail(mailPayload);
    } catch (error) {
      throw new HttpException(
        {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Erro ao salvar mensagem no banco de dados',
        },
        HttpStatus.INTERNAL_SERVER_ERROR
    );
    }
  }

  async findAll() {
    return await Suggestion.find();
  }

  async findOne(id: number) {
    return await Suggestion.findOne({
      where: { id }
      });
  }

  async update(id: number, updateSuggestionDto: UpdateSuggestionDto) {
    return await Suggestion.update(id, updateSuggestionDto);
  }

  async remove(id: number) {
    return await Suggestion.delete(id);
  }
}

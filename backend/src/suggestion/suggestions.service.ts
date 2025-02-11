import { Injectable } from '@nestjs/common';
import { CreateSuggestionDto } from './dto/create-suggestion.dto';
import { UpdateSuggestionDto } from './dto/update-suggestion.dto';
import { Suggestion } from './entities/suggestion.entity';

@Injectable()
export class SuggestionsService {
  async create(createSuggestionDto: CreateSuggestionDto) {
    return await Suggestion.insert(createSuggestionDto);
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

import { Injectable } from '@nestjs/common';
import { CreateStadiumDto } from './dto/create-stadium.dto';
import { UpdateStadiumDto } from './dto/update-stadium.dto';
import { Stadium } from './entities/stadium.entity';

@Injectable()
export class StadiumService {
  async create(createStadiumDto: CreateStadiumDto) {
    return await Stadium.insert(createStadiumDto);
  }

  async findAll() {
    return await Stadium.find({
      relations: ['teams'],
    });
  }

  async findOne(id: number) {
    return await Stadium.findOne({
      where: { id },
      relations: ['teams'],
      });
  }

  async update(id: number, updateStadiumDto: UpdateStadiumDto) {
    return await Stadium.update(id, updateStadiumDto);
  }

  async remove(id: number) {
    return await Stadium.delete(id);
  }
}

import { Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsService {
  async create(createTeamDto: CreateTeamDto) {
    return await Team.insert(createTeamDto);
  }

  async findAll() {
    const values = await Team.find();
    return values;
  }

  async findOne(id: number) {
    return await Team.findOne({
      where: { id },
      relations: ['stadium'],
      });
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    return await Team.update(id, updateTeamDto);
  }

  async remove(id: number) {
    return await Team.delete(id);
  }
}

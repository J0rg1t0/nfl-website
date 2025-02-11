import { Injectable } from '@nestjs/common';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';
import { News } from './entities/news.entity';

@Injectable()
export class NewsService {

  async create(createNewsDto: CreateNewsDto) {
    return await News.insert(createNewsDto);
  }

  async findAll() {
    return await News.find();
  }

  async findOne(id: number) {
    return await News.findOne({
      where: { id }
    }
    );
  }

  async update(id: number, updateNewsDto: UpdateNewsDto) {
    return await News.update(id, updateNewsDto);
  }

  async remove(id: number) {
    return await News.delete(id);
  }
}

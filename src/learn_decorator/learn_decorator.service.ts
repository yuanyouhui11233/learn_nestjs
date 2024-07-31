import { Injectable } from '@nestjs/common';
import { CreateLearnDecoratorDto } from './dto/create-learn_decorator.dto';
import { UpdateLearnDecoratorDto } from './dto/update-learn_decorator.dto';

@Injectable()
export class LearnDecoratorService {
  create(createLearnDecoratorDto: CreateLearnDecoratorDto) {
    return 'This action adds a new learnDecorator';
  }

  findAll() {
    return `This action returns all learnDecorator`;
  }

  findOne(id: number, ip: string) {
    return `This action returns a #${id} learnDecorator;IP:${ip}`;
  }

  update(id: number, updateLearnDecoratorDto: UpdateLearnDecoratorDto) {
    return `This action updates a #${id} learnDecorator`;
  }

  remove(id: number) {
    return `This action removes a #${id} learnDecorator`;
  }
}

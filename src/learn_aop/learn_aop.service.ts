import { Injectable } from '@nestjs/common';
import { CreateLearnAopDto } from './dto/create-learn_aop.dto';
import { UpdateLearnAopDto } from './dto/update-learn_aop.dto';

@Injectable()
export class LearnAopService {
  create(createLearnAopDto: CreateLearnAopDto) {
    return 'This action adds a new learnAop';
  }

  findAll() {
    return `This action returns all learnAop`;
  }

  findOne(id: number) {
    return `This action returns a #${id} learnAop`;
  }

  update(id: number, updateLearnAopDto: UpdateLearnAopDto) {
    return `This action updates a #${id} learnAop`;
  }

  remove(id: number) {
    return `This action removes a #${id} learnAop`;
  }
}

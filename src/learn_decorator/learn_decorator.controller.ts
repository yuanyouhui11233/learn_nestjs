import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LearnDecoratorService } from './learn_decorator.service';
import { CreateLearnDecoratorDto } from './dto/create-learn_decorator.dto';
import { UpdateLearnDecoratorDto } from './dto/update-learn_decorator.dto';

@Controller('learn-decorator')
export class LearnDecoratorController {
  constructor(private readonly learnDecoratorService: LearnDecoratorService) {}

  @Post()
  create(@Body() createLearnDecoratorDto: CreateLearnDecoratorDto) {
    return this.learnDecoratorService.create(createLearnDecoratorDto);
  }

  @Get()
  findAll() {
    return this.learnDecoratorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.learnDecoratorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLearnDecoratorDto: UpdateLearnDecoratorDto,
  ) {
    return this.learnDecoratorService.update(+id, updateLearnDecoratorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.learnDecoratorService.remove(+id);
  }
}

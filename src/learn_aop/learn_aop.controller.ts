import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { LearnAopService } from './learn_aop.service';
import { CreateLearnAopDto } from './dto/create-learn_aop.dto';
import { UpdateLearnAopDto } from './dto/update-learn_aop.dto';
import { LoginGuard } from 'src/login.guard';

@Controller('learn-aop')
@UseGuards(LoginGuard)
export class LearnAopController {
  constructor(private readonly learnAopService: LearnAopService) {}

  @Post()
  create(@Body() createLearnAopDto: CreateLearnAopDto) {
    return this.learnAopService.create(createLearnAopDto);
  }

  @Get()
  findAll() {
    return this.learnAopService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.learnAopService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLearnAopDto: UpdateLearnAopDto,
  ) {
    return this.learnAopService.update(+id, updateLearnAopDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.learnAopService.remove(+id);
  }
}

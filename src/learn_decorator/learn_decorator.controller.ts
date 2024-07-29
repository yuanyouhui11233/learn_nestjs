import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Ip,
  Request,
  Session,
} from '@nestjs/common';
import { LearnDecoratorService } from './learn_decorator.service';
import { CreateLearnDecoratorDto } from './dto/create-learn_decorator.dto';
import { UpdateLearnDecoratorDto } from './dto/update-learn_decorator.dto';
import { Request as ExpRequest } from 'express';

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

  /**
   * session装饰器的使用
   * 需要安装
   * npm install express-session
   * 在main.ts 引入并使用
   * @param sesssion
   * @returns
   */
  @Get('/session')
  session(@Session() sesssion) {
    if (!sesssion.count) {
      sesssion.count = 0;
    }
    sesssion.count = sesssion.count + 1;
    console.log(sesssion);
    return sesssion.count;
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
    @Ip() ip: string,
    @Request() req: ExpRequest,
  ) {
    // 获取IP的方式  @Ip() @Request() 装饰器 ...
    // IP 分 ipv4 ipv6
    console.log(ip);
    console.log(req.ip, 'req');
    return this.learnDecoratorService.findOne(+id, ip);
  }
}

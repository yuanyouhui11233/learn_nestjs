import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // 使用Inject装饰器 注入 在module文件声明的 provides 对象，这样就可以使用注入后的对象了
  @Inject('person') private readonly person: { name: string; age: number };
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): { msg: string; name: string; age: number } {
    console.log('controller');
    const data = this.appService.getHello();
    return {
      msg: data,
      age: this.person.age,
      name: this.person.name,
    };
  }
}

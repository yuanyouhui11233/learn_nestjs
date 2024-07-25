import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { LearnAopModule } from './learn_aop/learn_aop.module';

@Module({
  imports: [PersonModule, LearnAopModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'person',
      useValue: {
        name: 'LIUCHANG',
        age: 18,
      },
    },
  ],
})
/**
 * providers 中声明对象时 useValue useFactory useClass useExisting 的区别
 *
 * useValue: 用于提供一个静态的值作为服务的实现; 可以是 字符串 对象 数字等任意类型;
 * 在运行时，这个值会被直接返回，不会有额外的操作
 *
 * useFactory: 用于提供一个工厂函数，该函数在需要时会动态创建作为服务的实现
 * 工厂函数可以接收其他服务作为依赖项；并根据需求动态创建实例
 *
 * useClass: 用于提供一个类作为服务的实现; 运行时,这个类会被实例化作为服务
 * 这个类可以有自己的依赖项,通过构造函数注入
 *
 * useExisting: 用于提供一个现有的服务实例作为新的服务
 * 这种情况下,新的服务只是现有服务的别名,他们共享一个实例
 *
 * 灵活运用这些 provider 类型，就可以利于 Nest 的 IOC 容器中注入的对象
 */
export class AppModule {}

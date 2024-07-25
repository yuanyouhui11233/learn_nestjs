import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { LearnAopService } from './learn_aop.service';
import { LearnAopController } from './learn_aop.controller';
import { LogMiddleware } from 'src/log.middleware';

@Module({
  controllers: [LearnAopController],
  providers: [LearnAopService],
})
export class LearnAopModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 使用路由中间件 LogMiddleware中间件只对 learn-aop模块生效
    consumer.apply(LogMiddleware).forRoutes('learn-aop*');
  }
}

/**
 * 后端框架基本上都是MVC架构
 * Model View Controller
 * 请求先发给 Controller 由它调用 Model层的 service 完成业务逻辑 然后返回对应的 View
 *
 * 在这个过程中 Nest 还提供了 AOP(Aspect Oriented Programming) 也就是面向切面编程的能力
 *
 * 一个请求过来 经过 Controller Service Repository(数据库访问) 的逻辑
 * 如果想在这个调用链路里加一些通用逻辑呢？ 比如 日志记录、权限控制、异常处理等。
 * 容易想到的是直接改造Controller层代码，加入这些逻辑
 * 这样是可以实现，但是这些通用的逻辑入侵到了业务逻辑里，而且你要在每个Controller里调用，不优雅
 *
 * 那么可以在调用Controller之前执行这些通用逻辑呢？
 * 这种透明的加入一些切面逻辑的编程方式就叫做AOP
 * AOP的好处是可以把一些通用的逻辑分离到切面中，保持业务逻辑的纯粹性，这样切面逻辑可以复用，还可以动态的删减
 * Express的中间件的洋葱模型也是AOP的一种实现。
 * 而 Nest 实现 AOP 的方式一共有五种
 * middleware Guard Pipe Interceptor ExceptionFilter
 *
 * 1.Middleware: 在main.ts 中 通过App.use() 调用函数
 * 和Express的中间件逻辑概念一样 只不过分全局中间件和路由中间件
 * 路由中间件 nest g middleware log --no-spec --flat 使用命令创建
 *
 * 2.使用 Guard 路由守卫实现中间件
 *  (客户端发请求)调用某个Controller之前判断权限，返回 true 或 false 来决定是否放行
 *  nest g guard login --no-spec --flat 使用nest 命令创建路由守卫
 * 路由守卫也分为全局级别/路由级别
 * 返回 false 则 响应 403 没有权限访问
 */

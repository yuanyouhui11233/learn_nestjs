import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class LoginGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    console.log('login guard');
    return false;
  }
}
// guard 要实现 CanActivate
// 从cntext 拿到请求信息
// 做一些权限验证等处理之后决定 返回 true / false

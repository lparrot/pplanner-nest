import {ExecutionContext, Inject, Injectable} from '@nestjs/common'
import {AuthGuard} from '@nestjs/passport'
import {Reflector} from '@nestjs/core'
import {Observable} from 'rxjs'
import {IS_PUBLIC_KEY} from '../common/decorators'

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  @Inject()
  reflector: Reflector


  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    return super.canActivate(context);
  }
}

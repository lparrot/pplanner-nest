import {Controller, Get, Inject, Post, Req, UseGuards} from '@nestjs/common';
import {AuthService} from './auth.service';
import {LocalAuthGuard} from './local.guard'
import {Public} from '../common/decorators'
import {CurrentUser} from '../common/decorators/current-user.decorator'
import {User} from '../common/model/user.model'

@Controller('auth')
export class AuthController {
  @Inject() readonly authService: AuthService

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req) {
    return this.authService.login(req.user)
  }

  @Get('profile')
  getProfile(@CurrentUser() user: User) {
    return user;
  }
}

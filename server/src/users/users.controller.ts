import {Controller, Get, Inject} from '@nestjs/common';
import {UsersService} from './users.service'

@Controller('users')
export class UsersController {

  @Inject()
  private usersService: UsersService

  @Get()
  findAll() {
    return this.usersService.findAll()
  }
}

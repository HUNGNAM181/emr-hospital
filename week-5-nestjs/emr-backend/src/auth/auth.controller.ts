import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserRole } from '../users/schemas/user.schema';
import { Public } from './decorators/public.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @Post('register')
  register(
    @Body()
    body: {
      email: string;
      password: string;
      role?: UserRole;
    },
  ) {
    return this.authService.register(body.email, body.password, body.role);
  }

  @Public()
  @Post('login')
  async login(
    @Body()
    body: {
      email: string;
      password: string;
    },
  ) {
    const user = await this.authService.validateUser(body.email, body.password);

    return this.authService.login(user);
  }
}

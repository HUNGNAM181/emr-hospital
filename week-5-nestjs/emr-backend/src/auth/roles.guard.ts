import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import { Role } from './roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // 1. Lấy roles yêu cầu từ metadata
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    // Nếu route không yêu cầu role → cho qua
    if (!requiredRoles) return true;

    // 2. Lấy user từ request (AuthGuard đã set)
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // 3. Kiểm tra role
    return requiredRoles.includes(user.role);
  }
}

import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { Role } from '../entities/role.enum';
import { log } from 'console';


@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private reflector : Reflector){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
      // What is the required role?
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass()
    ]);
    

    if (!requiredRoles) {
      return true;  
    }

    // does the current user making the request have those roles?

    const { user } = context.switchToHttp().getRequest();;
   
    
    return user && requiredRoles.includes(user.role);
    
   
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
      private router: Router,
      private auth: AuthService
  ) { }

  canActivate() {
      if(this.auth.isUserAdmin()){  
          return true;
      }else{           
          this.router.navigate(['/admin/login']); 
          return false;
      }
  }
}
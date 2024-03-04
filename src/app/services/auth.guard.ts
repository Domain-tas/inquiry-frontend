import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  let tokenExists = inject(CookieService).check('AuthToken');
  if (!tokenExists) {
    inject(Router).navigateByUrl('/login');
    return false;
  }

  return true
};

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard, FreeGuard } from '@guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    canActivate: [FreeGuard],
    loadChildren: () =>
      import('@modules/auth/signin/signin.module').then((m) => m.SignInModule),
  },
  {
    path: 'employee',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('@modules/employee/employee.module').then((m) => m.EmployeeModule),
  },
  {
    path: '404',
    loadChildren: () =>
      import('@modules/others/notfound/notfound.module').then((m) => m.NotfoundModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('@modules/auth/signin/signin.module').then((m) => m.SignInModule),
  },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

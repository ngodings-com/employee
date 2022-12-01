import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbModule } from '@components/breadcrumb/breadcrumb.module';
import { ButtonModule } from '@components/button/button.module';

import { SignInComponent } from './signin.component';

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
    data: { breadcrumb: 'Sign In' },
    children: [
    ]
  },
];

@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    ButtonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    SignInComponent,
  ],
  providers: [],
})
export class SignInModule { }

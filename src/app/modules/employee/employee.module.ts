import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BreadcrumbModule } from '@components/breadcrumb/breadcrumb.module';
import { ButtonModule } from '@components/button/button.module';

import { EmployeeComponent } from './employee.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DetailModule } from './detail/detail.module';
import { ManageModule } from './manage/manage.module';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    data: { breadcrumb: 'Employee Management' },
    children: [
    ]
  },
];

@NgModule({
  declarations: [
    EmployeeComponent,
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    ButtonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    TableModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    DialogModule,
    DetailModule,
    ManageModule,
  ],
  exports: [
    EmployeeComponent,
  ],
  providers: [],
})
export class EmployeeModule { }

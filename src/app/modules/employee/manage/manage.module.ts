import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ManageComponent } from './manage.component';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { InputNumberModule } from 'primeng/inputnumber';
import { DropdownModule } from 'primeng/dropdown';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from '@components/button/button.module';

@NgModule({
  declarations: [
    ManageComponent,
  ],
  imports: [
    CommonModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    CalendarModule,
    InputNumberModule,
    DropdownModule,
    InputSwitchModule,
    ButtonModule,
  ],
  exports: [
    ManageComponent,
  ],
  providers: [],
})
export class ManageModule { }

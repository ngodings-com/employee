import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetailComponent } from './detail.component';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    CommonModule,
    DialogModule,
  ],
  exports: [
    DetailComponent,
  ],
  providers: [],
})
export class DetailModule { }

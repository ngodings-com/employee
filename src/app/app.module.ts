import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarModule } from '@layouts/navbar/navbar.module';

import { ThemeModule } from '@components/theme/theme.module';
import { ToTopModule } from '@components/to-top/to-top.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from '@layouts/footer/footer.module';
import { CopyrightModule } from '@layouts/copyright/copyright.module';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NavbarModule,
    FooterModule,
    CopyrightModule,
    ThemeModule,
    ToTopModule,
    ToastModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

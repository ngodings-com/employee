import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ColorState } from '@models/color';
import { AppData } from 'src/app/app.data';
import { AppHelper } from 'src/app/app.helper';

@Component({
  selector: 'app-pages-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SignInComponent implements OnInit, AfterViewInit {

  email = 'email@tes.com';
  password = 'Password123@';
  constructor(public appHelper: AppHelper, public appData: AppData) {
  }

  ngOnInit() {
    const page = 'Signin';
    this.appData.title = "Ngodings | " + page;
    this.appData.onTitleChanges.next(true);

    this.appData.meta = {
      type: 'keywords',
      name: page,
    }
    this.appData.onMetaChanges.next(true);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.appData.isFullPageValue = true;
    }, 250);
  }

  login() {
    if (this.email == '' || this.password == '') {
      this.appData.toast = { title: 'Info', desc: 'Email & Password required!', severity: ColorState.error, };
      this.appData.onToastChanges.next(true);
      return;
    }

    if (this.email != this.appData.credential.email) {
      this.appData.toast = { title: 'Info', desc: 'Email wrong!', severity: ColorState.error, };
      this.appData.onToastChanges.next(true);
      return;
    }

    if (this.password != this.appData.credential.password) {
      this.appData.toast = { title: 'Info', desc: 'Password wrong!', severity: ColorState.error, };
      this.appData.onToastChanges.next(true);
      return;
    }

    localStorage.setItem('login', 'true');
    this.appData.toast = { title: 'Info', desc: 'Login Success!', severity: ColorState.success, };
    this.appData.onToastChanges.next(true);
    this.appHelper.goToURL('/employee')
  }
}

import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ColorStandard, ColorState } from '@models/color';
import { Employee } from '@models/employee';
import { SizeStandard } from '@models/size';
import { AppData } from 'src/app/app.data';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ManageComponent implements OnInit {
  @Input()
  display: boolean = false;
  @Input()
  employee!: Employee;
  @Input()
  groups: string[] = [];
  @Input()
  type: string = 'Create';

  color = ColorStandard;
  size = SizeStandard;

  @Output() displayChange = new EventEmitter<boolean>();
  @Output() dataChange = new EventEmitter<Employee>();
  @Output() createChange = new EventEmitter<Employee>();

  constructor(public appData: AppData, private router: Router) {
  }

  ngOnInit() {
  }

  onChangeGroup(event: any) {
    if (event) {
      console.log("event", event);
      // this.employee.group = event;
    }
  }

  validateEmail(email: string) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }

    this.appData.toast = { title: 'Info', desc: 'Email is invalid!', severity: ColorState.error, };
    this.appData.onToastChanges.next(true);
    return false;
  }

  submit() {
    if (!this.employee.email) {
      this.appData.toast = { title: 'Info', desc: 'Email is required!', severity: ColorState.error, };
      this.appData.onToastChanges.next(true);
      return;
    }

    if (!this.validateEmail(this.employee.email)) {
      return;
    }

    if (!this.employee.username) {
      this.appData.toast = { title: 'Info', desc: 'Username is required!', severity: ColorState.error, };
      this.appData.onToastChanges.next(true);
      return;
    }

    if (!this.employee.firstName) {
      this.appData.toast = { title: 'Info', desc: 'First name is required!', severity: ColorState.error, };
      this.appData.onToastChanges.next(true);
      return;
    }

    if (!this.employee.lastName) {
      this.appData.toast = { title: 'Info', desc: 'Last name is required!', severity: ColorState.error, };
      this.appData.onToastChanges.next(true);
      return;
    }

    if (!this.employee.description) {
      this.appData.toast = { title: 'Info', desc: 'Description is required!', severity: ColorState.error, };
      this.appData.onToastChanges.next(true);
      return;
    }

    if (!this.employee.group) {
      this.appData.toast = { title: 'Info', desc: 'Group is required!', severity: ColorState.error, };
      this.appData.onToastChanges.next(true);
      return;
    }

    if (!this.employee.basicSalary) {
      this.appData.toast = { title: 'Info', desc: 'Basic salary is required!', severity: ColorState.error, };
      this.appData.onToastChanges.next(true);
      return;
    }

    if (this.type == 'Create') {
      this.createChange.emit(this.employee);
      this.appData.toast = { title: 'Info', desc: 'Employee success ' + this.type + '!', severity: ColorState.success, };
      this.appData.onToastChanges.next(true);
    } else {
      this.dataChange.emit(this.employee);
      this.appData.toast = { title: 'Info', desc: 'Employee success ' + this.type + '!', severity: ColorState.warn, };
      this.appData.onToastChanges.next(true);
    }

    this.displayChange.emit(false);
  }
}
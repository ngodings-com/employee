import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ColorStandard, ColorState } from '@models/color';
import { SizeStandard } from '@models/size';
import { AppData } from 'src/app/app.data';
import { AppHelper } from 'src/app/app.helper';
import { HttpClient } from '@angular/common/http';
import { Employee } from '@models/employee';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-pages-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EmployeeComponent implements OnInit, AfterViewInit {

  size = SizeStandard;
  color = ColorStandard;

  employees: Employee[] = [];
  employeeSelected!: Employee;
  employeeSelectedTemp!: Employee;
  groups: string[] = [];

  @ViewChild('dt')
  table!: Table;

  constructor(public appHelper: AppHelper, public appData: AppData, private http: HttpClient) {
  }

  async ngOnInit() {
    const page = 'Employee Management';
    this.appData.title = "Ngodings | " + page;
    this.appData.onTitleChanges.next(true);

    this.appData.meta = {
      type: 'keywords',
      name: page,
    }
    this.appData.onMetaChanges.next(true);

    await this.getEmployees();
  }

  onSearch(event: any, field: string) {
    console.log("event", event?.target?.value);
    this.table.filter(event?.target?.value, field, 'contains')
  }

  getEmployees() {
    return this.http.get('/assets/data/employee.json')
      .subscribe((data: any) => {
        this.employees = data;
        this.employees?.forEach((item) => {
          this.groups.push(item.group);
        })
        this.groups = this.groups.filter((item, pos) => {
          return this.groups.indexOf(item) == pos;
        })

      });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.appData.isFullPageValue = false;
    }, 250);
  }

  deleteEmployee(employee: Employee) {
    const index = this.employees.findIndex((e) => e.id == employee.id);
    this.employees.splice(index, 1);
    this.appData.toast = { title: 'Info', desc: 'Delete Success!', severity: ColorState.error, };
    this.appData.onToastChanges.next(true);
  }

  onDetail = false;
  detailEmployee(employee: Employee) {
    this.employeeSelected = Object.assign({}, employee);
    this.employeeSelectedTemp = employee;
    this.onDetail = true;
  }

  manageType = 'Create';
  onEdit = false;
  editEmployee(employee: Employee) {
    this.manageType = 'Update';
    this.employeeSelected = Object.assign({}, employee);
    this.employeeSelectedTemp = employee;
    this.onEdit = true;
  }

  add() {
    this.manageType = 'Create';
    this.employeeSelected = {
      id: 0,
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      birthDate: new Date(),
      basicSalary: '',
      status: false,
      group: '',
      description: ''
    };
    this.onEdit = true;
  }

  createChange(event: any) {
    if (event) {
      this.employees.unshift(event);
    }
  }

  dataChange(employee: any) {
    if (employee) {
      this.employeeSelected = Object.assign({}, employee);
      const index = this.employees.findIndex((e) => e.id == employee.id);

      this.employees[index] = this.employeeSelected;
    }
  }
}

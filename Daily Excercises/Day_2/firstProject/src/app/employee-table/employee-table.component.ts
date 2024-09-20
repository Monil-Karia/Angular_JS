import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css'
})
export class EmployeeTableComponent {
  employees = [
    { firstName: 'John', lastName: 'Doe', department: 'Finance', salary: 5000, date: '2024/09/19' },
    { firstName: 'Amy', lastName: 'Watson', department: 'Hr', salary: 8000, date: '2024/09/19' },
    { firstName: 'Shrishti', lastName: 'Sharma', department: 'IT', salary: 10000, date: '2024/09/19' }
  ];
}

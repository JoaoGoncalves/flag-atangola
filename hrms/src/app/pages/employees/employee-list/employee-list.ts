import { Component } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  imports: [NgFor, AsyncPipe],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {
  
  employees$ : any;
  isConfirmationOpen = false;
  
  constructor(private readonly employeeService: EmployeeService){
  }
  
  
}

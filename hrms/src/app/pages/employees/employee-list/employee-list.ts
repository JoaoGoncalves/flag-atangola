import { Component, inject } from '@angular/core';
import { EmployeeService } from '../../../services/employee.service';
import { AsyncPipe, NgComponentOutlet, NgFor } from '@angular/common';
import { Observable } from 'rxjs';
import { Employee } from '../../../infrastructure/types/employee';

@Component({
  selector: 'app-employee-list',
  imports: [NgFor, AsyncPipe, NgComponentOutlet],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList {
  
  employeeService = inject(EmployeeService);
  employees$ : Observable<Employee[]> = this.employeeService.getEmployees();

  isConfirmationOpen = false;
  confirmDialog : any;

  
  /* constructor(private readonly employeeService: EmployeeService) {
    this.employees$ = this.employeeService.getEmployees();
  } */

  async showConfimationDialog(){
    const {ConfirmationDialog} = await import('../../../shared/components/confirmation-dialog/confirmation-dialog');
    this.confirmDialog = ConfirmationDialog;
    this.isConfirmationOpen = true;
  }
  
  
}
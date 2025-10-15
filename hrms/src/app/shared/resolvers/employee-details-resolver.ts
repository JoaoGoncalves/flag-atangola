import { ResolveFn } from '@angular/router';
import { Employee } from '../../infrastructure/types/employee';
import { inject } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';

export const employeeDetailsResolver: ResolveFn<Employee> = (route, state) => {
  const employeeService = inject(EmployeeService);
  const id = +(route.paramMap.get('id') ?? 0) //Nullish coalescing operator (??) - JavaScript 

  return employeeService.getemployee(id);
};

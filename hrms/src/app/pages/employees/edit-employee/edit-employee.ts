import { Component, inject } from '@angular/core';
import { PermissionsService } from '../../../services/permission-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeForm } from '../../../infrastructure/types/employee-form';

@Component({
  selector: 'app-edit-employee',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-employee.html',
  styleUrl: './edit-employee.css',
})
export class EditEmployee {
  permission = inject(PermissionsService);

  form = new FormGroup<EmployeeForm>({
    firstName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    lastName: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    position: new FormControl('', { nonNullable: true }),
    level: new FormControl('', { nonNullable: true }),
  });
}

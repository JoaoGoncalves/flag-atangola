import { Component, DestroyRef, inject } from '@angular/core';
import { PermissionsService } from '../../../services/permission-service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeForm } from '../../../infrastructure/types/employee-form';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-edit-employee',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-employee.html',
  styleUrl: './edit-employee.css',
})
export class EditEmployee {
  permissionService = inject(PermissionsService);
  destroyRef = inject(DestroyRef)

  form = new FormGroup<EmployeeForm>({
    firstName: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    lastName: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    position: new FormControl('', { nonNullable: true }),
    level: new FormControl('', { nonNullable: true }),
  });

  ngOnInit(){
   this.permissionService.hasPermission('EditEmployeePrivateDetails').pipe(
    takeUntilDestroyed(this.destroyRef)
   ).subscribe( hasPermission => {
    if(!hasPermission){
      this.form.controls.firstName.disable();
      this.form.controls.lastName.disable();
      this.form.controls.email.disable();
    } else {
      this.form.controls.firstName.enable();
      this.form.controls.lastName.enable();
      this.form.controls.email.enable();
    }
   })
    
  }
}

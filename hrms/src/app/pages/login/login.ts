import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthServices } from '../../services/auth.services';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule/* , NgIf */],
providers:[AuthServices],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  constructor(private readonly authService: AuthServices/* , private readonly employeeService: EmployeeService */){}

  credentials = { email: '' , password: ''};

  submit(){
    if(this.credentials.email && this.credentials.password){
      this.authService.login(this.credentials).subscribe();
    }
  }

}

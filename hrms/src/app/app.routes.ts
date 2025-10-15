import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { EmployeeService } from './services/employee.service';
import { routes as employeeRoutes } from './pages/employees/employees.routes';
import { AuthClassGuard } from './shared/guards/auth-class-guard';
import { authGuard } from './shared/guards/auth-guard';

export const routes: Routes = [
    {path: 'login', component: Login},
    /* {
        path: 'registration',
        loadComponent: () => {
            return import('./pages/registration/registration').then(
                m => m.Registration
            )
        }
    } */
   {
        path: 'registration',
        loadComponent: async  () => {
            const m = await import('./pages/registration/registration');
            return m.Registration
        }
    },
    /* {
        path: 'employees',
        providers: [EmployeeService],
        loadChildren: async  () => {
            const m = await import('./pages/employees/employees.routes');
            return m.routes;
        }
    } */
   {
    path: 'employees',
    canActivate: [/* AuthClassGuard */ authGuard],
    providers: [EmployeeService],
    children: employeeRoutes,   
  },
];

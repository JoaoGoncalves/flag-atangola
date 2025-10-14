import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { EmployeeService } from './services/employee.service';

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
    {
        path: 'employees',
        providers: [EmployeeService],
        loadChildren: async  () => {
            const m = await import('./pages/employees/employees.routes');
            return m.routes;
        }
    }
];

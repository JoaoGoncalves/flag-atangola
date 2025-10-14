import { CreateEmployee } from "./create-employee/create-employee";
import { EditEmployee } from "./edit-employee/edit-employee";
import { EmployeeDetails } from "./employee-details/employee-details";
import { EmployeeList } from "./employee-list/employee-list";

export const routes = [
    {path:'list', component: EmployeeList},
    {path:'details/:id', component: EmployeeDetails},
    {path:'create', component: CreateEmployee},
    {path:'edit', component: EditEmployee},
]
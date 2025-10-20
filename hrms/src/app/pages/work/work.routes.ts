import {  Routes } from "@angular/router";
import { ProjectDetails } from "./project-details/project-details";
import { ProjectList } from "./project-list/project-list";
import { TimeOffRequests } from "./time-off-requests/time-off-requests";


export const routes : Routes = [
    { path: 'projects', pathMatch: 'full', component: ProjectList },
    { path: 'projects/:id', component: ProjectDetails },
    { path: 'time-off', component: TimeOffRequests },
]
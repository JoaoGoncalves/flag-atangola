import {  Routes } from "@angular/router";
import { ProjectDetails } from "./project-details/project-details";
import { ProjectList } from "./project-list/project-list";


export const routes : Routes = [
    { path: 'projects', pathMatch: 'full', component: ProjectList },
    { path: 'projects/:id', component: ProjectDetails },
]
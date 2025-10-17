import { Component, inject } from '@angular/core';
import { ProjectService } from '../../../services/project-service';
import { ProjectCard } from "../../../shared/components/project-card/project-card";
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-project-list',
  imports: [ProjectCard, NgFor, AsyncPipe],
templateUrl: './project-list.html',
  styleUrl: './project-list.css'
})
export class ProjectList {

 private readonly projectService = inject(ProjectService);
  projects$ = this.projectService.getProjects();
}

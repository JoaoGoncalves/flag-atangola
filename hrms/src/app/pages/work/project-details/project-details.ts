import { Component, inject, Input, numberAttribute, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../services/project-service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Project } from '../../../infrastructure/types/project';
import { ProjectCard } from "../../../shared/components/project-card/project-card";
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-project-details',
  imports: [ProjectCard, NgIf, AsyncPipe, NgFor],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails implements OnChanges /* OnInit, OnDestroy */ {
  /* private readonly route = inject(ActivatedRoute); */
  @Input({transform: numberAttribute}) id!: number;
  private readonly projectService = inject(ProjectService);
  project$!: Observable<Project>;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['id']){
      this.project$ = this.projectService.getProject(this.id)
    }
  }
  /* destroy$ = new Subject<void>();
 */
  /* ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      this.project$ = this.projectService.getProject(+params.get('id')!);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  } */
}

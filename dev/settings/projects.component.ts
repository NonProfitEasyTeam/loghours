import {Component, OnInit} from 'angular2/core';
import {ProjectService} from './project.service';
import {Project} from './project';
@Component({
    selector: 'projects',
    template: `
        <h1>My Projects</h1>
        <p>This is my project list:</p>
        <project-list></project-list>
        <ul>
                <li *ngFor="#project of Projects" [class.selected]="project === selectedProject" > 
                    <span (click)="onSelect(project)">{{project.name}}</span>&nbsp;&nbsp;&nbsp;<span class="delete" (click)="onDelete(project)">Delete</span>
                </li>
        </ul>
        <div>
            <label for="selectedProject">Selected Project:</label>
            <input id="selectedProject" type="text" required [(ngModel)]="selectedProject.name" />
        </div>
    `, 
    styles: [`
        .selected {
            color: orange;
        }
        .delete{
            color:red;
        }
    `],
    providers:[ProjectService]
})

export class ProjectComponent implements OnInit {
    public Projects: Project[];
    
    public selectedProject = {};
    
    constructor(private _projectService:ProjectService){}

    ngOnInit():any{
        this.getProjects();
    }
    onSelect(project){
        this.selectedProject = project;
    }

    onDelete(project){
        var index = this.Projects.indexOf(project);
        this.Projects.splice(index, 1);
    }

    getProjects(){
        this._projectService.getProject().then((Projects: Project[]) => this.Projects = Projects);
    }
}
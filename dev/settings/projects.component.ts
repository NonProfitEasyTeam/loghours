import {Component} from 'angular2/core';
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
    `]
})

export class ProjectComponent {
    public Projects = [
        { id: 1, name: 'Fundly' },
        { id: 2, name: 'Funldy CRM' },
        { id: 3, name: 'Fundly Connect' },
        { id: 4, name: 'Fundly Pro' },
        { id: 5, name: 'Fundly Enterprise' }
    ];
    
    public selectedProject = {};
    
    onSelect(project){
        this.selectedProject = project;
    }

    onDelete(project){
        var index = this.Projects.indexOf(project);
        this.Projects.splice(index, 1);
    }
}
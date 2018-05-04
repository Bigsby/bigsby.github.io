import { Component, OnInit, Input } from "@angular/core";

import { DataService } from "../data.service";

@Component({
    selector: "pet-section",
    templateUrl: "./pet-section.component.html",
    styleUrls: [
        "./pet-section.component.css"
    ]
})
export class PetSection implements OnInit {
    petProjects: Project[];
    ngOnInit(): void {
        this.data.get<Project[]>("pet")
            .then(response => this.petProjects = response);
    }

    constructor(private data: DataService) {

    }
}

@Component({
    selector: "pet-project",
    templateUrl: "./pet-project.html",
    styleUrls: [
        "./pet-section.component.css"
    ]
})
export class PetProject {
    @Input() project: Project;

    toggle(project: Project) {
        project.isExpanded = !project.isExpanded;
    }
}

class Project {
    name: string;
    link: string;
    text: string;
    isExpanded: boolean;
}

export const PetComponents = [
    PetSection,
    PetProject
]
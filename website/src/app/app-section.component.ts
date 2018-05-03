import { Component, Input } from '@angular/core';

@Component({
    selector: "app-section",
    styleUrls: ["./app-section.component.css"],
    template: "<h1>{{title}}</h1> <ng-content></ng-content>"
})
export class AppSection {
    @Input() title;
}

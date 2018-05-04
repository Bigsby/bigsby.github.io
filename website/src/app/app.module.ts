import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { AppSection } from "./app-section.component";
import { DataService } from "./data.service";
import { DevelopmentComponents } from "./development/development-section.component";
import { WorkComponents } from "./work/work-section.component";
import { PetComponents } from "./pet/pet-section.component";

@NgModule({
  declarations: [
    AppComponent,
    AppSection,
    DevelopmentComponents,
    WorkComponents,
    PetComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

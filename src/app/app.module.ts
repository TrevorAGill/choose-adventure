import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { routing } from './app.routing';
import { Scene1Component } from './scene1/scene1.component';
import { HelpAttendantComponent } from './help-attendant/help-attendant.component';
import { ExamineSceneComponent } from './examine-scene/examine-scene.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    Scene1Component,
    HelpAttendantComponent,
    ExamineSceneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { Scene1Component } from './scene1/scene1.component';
import { HelpAttendantComponent } from './help-attendant/help-attendant.component';
import { ExamineSceneComponent } from './examine-scene/examine-scene.component';


const appRoutes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'scene1',
    component: Scene1Component
  },
  {
    path: 'help-attendant',
    component: HelpAttendantComponent
  },
  {
    path: 'examine-scene',
    component: ExamineSceneComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

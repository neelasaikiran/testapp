import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './config/config.component';

const routes: Routes = [
  { path: '',pathMatch:'full', redirectTo:'settings' },
  { path: 'settings', component: SettingsComponent },
  { path: 'config', component: ConfigComponent },
];

@NgModule({
  declarations: [
    ConfigComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminModule { }



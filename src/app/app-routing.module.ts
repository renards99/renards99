import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailDetailComponent } from './components/email-detail/email-detail.component';
import { EmailPreviewComponent } from './components/email-preview/email-preview.component';
import { ErrorComponent } from './components/error/error.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { MessagesComponent } from './components/messages/messages.component';

const routes: Routes =
  [
    { path: '', redirectTo: '/messages', pathMatch: 'full' },
    {
      path: 'messages', component: MessagesComponent,
      children:
      [{
        path:":box",component:EmailPreviewComponent,children:[{path:":id",component:EmailDetailComponent}]
      }]
    },
    { path: 'contacts', component: MaintenanceComponent },
    { path: 'preferences', component: MaintenanceComponent },
    { path: '**', component: ErrorComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

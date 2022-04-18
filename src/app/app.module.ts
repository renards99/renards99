import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailBoxComponent } from './components/email-box/email-box.component';
import { EmailPreviewComponent } from './components/email-preview/email-preview.component';
import { EmailDetailComponent } from './components/email-detail/email-detail.component';
import { HeaderComponent } from './components/header/header.component';
import { MaintenanceComponent } from './components/maintenance/maintenance.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    EmailBoxComponent,
    EmailPreviewComponent,
    EmailDetailComponent,
    HeaderComponent,
    MaintenanceComponent,
    MessagesComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

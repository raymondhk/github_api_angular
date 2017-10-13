import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GitScoreFormComponent } from './git-score-form/git-score-form.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ShowUserComponent } from './git-score-form/show-user/show-user.component';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent,
    GitScoreFormComponent,
    ShowUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }

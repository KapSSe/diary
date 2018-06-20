import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { ItemsComponent } from './items/items.component';
import { ItemEditorComponent } from './items/item-editor/item-editor.component';
import { CommentsComponent } from './items/comments/comments.component';
import { CommentsEditorComponent } from './items/comments/comments-editor/comments-editor.component';

import { PersistanceService } from './persistance.service';
import { DataService } from './data.service';
import { ItemCounterComponent } from './items/item-counter/item-counter.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    ItemsComponent,
    ItemEditorComponent,
    CommentsComponent,
    CommentsEditorComponent,
    ItemCounterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [PersistanceService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

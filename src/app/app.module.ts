import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SingInComponent } from './auth/sing-in/sing-in.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { ToolListComponent } from './tools/tool-list/tool-list.component';
import { ToolItemComponent } from './tools/tool-item/tool-item.component';
import { ToolDetailComponent } from './tools/tool-detail/tool-detail.component';
import { ToolEditComponent } from './tools/tool-edit/tool-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SingInComponent,
    HomeComponent,
    HeaderComponent,
    ToolListComponent,
    ToolItemComponent,
    ToolDetailComponent,
    ToolEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { MaindisplayComponent } from './components/maindisplay/maindisplay.component';
import { DataService } from './common/services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MaindisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CountdownModule } from 'ngx-countdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './views/pages/main-page/main-page.component';
import { HeaderComponent } from './shared/header/header.component';
import { ButtonComponent } from './shared/button/button.component';
import { GamePageComponent } from './views/pages/game-page/game-page.component';
import { OptionPageComponent } from './views/pages/option-page/option-page.component';
import { StartPageComponent } from './views/pages/start-page/start-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ClockComponent } from './clock/clock.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightJsModule } from 'ngx-highlight-js';
import { ToastrModule } from 'ngx-toastr';
import { EndPageComponent } from './views/pages/end-page/end-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    HeaderComponent,
    ButtonComponent,
    GamePageComponent,
    OptionPageComponent,
    StartPageComponent,
    ClockComponent,
    EndPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
    HighlightJsModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

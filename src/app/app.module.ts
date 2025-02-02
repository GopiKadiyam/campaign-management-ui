/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './states/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AsyncPipe } from '@angular/common';
import { AuthEffects } from './states/auth/auth.effects';
import { loaderReducer } from './states/loaders/loader.reducer';
import { AuthGaurdService } from './gaurds/auth-gaurd.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
    StoreModule.forRoot(appReducers), // Register the reducers
    EffectsModule.forRoot([AuthEffects]), // Add effects if any
    StoreDevtoolsModule.instrument({ maxAge: 25 }), // NgRx DevTools
    AsyncPipe
  ],
  bootstrap: [AppComponent],
  providers:[AuthGaurdService,CookieService]
})
export class AppModule {
}

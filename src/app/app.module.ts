import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './+state/reducers';
import { Passable1Component } from './passable/passable1/passable1.component';
import { Passable2Component } from './passable/passable2/passable2.component';
import { Passable3Component } from './passable/passable3/passable3.component';

@NgModule({
  declarations: [
    AppComponent,
    Passable1Component,
    Passable2Component,
    Passable3Component
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

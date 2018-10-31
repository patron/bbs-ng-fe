import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { BonusesComponent } from './bonuses/bonuses.component';
import { TransctionsComponent } from './transactions/transctions.component';

import {RouterModule, Routes} from '@angular/router'; // Added manually
import {CustomMaterialModule} from './core/material.module';
import { ForumComponent } from './forum/forum.component';
import { RecentComponent } from './bonuses/recent/recent.component';
import 'hammerjs';


// Added manualy
const appRoutes: Routes = [
  { path: '', component: BonusesComponent, data: { title: 'First Component' } },
  { path: 'bonuses', component: BonusesComponent, data: { title: 'Bonuses Management' } },
  { path: 'transactions', component: TransctionsComponent, data: { title: 'All Transctions' } },
  { path: 'forum', component: ForumComponent, data: { title: 'Forum' } }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BonusesComponent,
    TransctionsComponent,
    ForumComponent,
    RecentComponent,
  ],
  imports: [
    AppComponent,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    CustomMaterialModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

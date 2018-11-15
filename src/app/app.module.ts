import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { BonusesComponent } from './bonuses/bonuses.component';
import { TransactionsComponent } from './transactions/transactions.component';

import {RouterModule, Routes} from '@angular/router'; // Added manually
import {CustomMaterialModule} from './core/material.module';
import { ForumComponent } from './forum/forum.component';
import { RecentComponent } from './bonuses/recent/recent.component';
import 'hammerjs';
import {UserService} from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import {MatDialog} from '@angular/material';
import { FormsModule } from '@angular/forms';

import { DialogOverviewExampleDialog } from './transactions/transactions.component';


// Added manualy
const appRoutes: Routes = [
  { path: '', component: BonusesComponent, data: { title: 'First Component' } },
  { path: 'bonuses', component: BonusesComponent, data: { title: 'Bonuses Management' } },
  { path: 'transactions', component: TransactionsComponent, data: { title: 'All Transctions' } },
  { path: 'forum', component: ForumComponent, data: { title: 'Forum' } }
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BonusesComponent,
    TransactionsComponent,
    ForumComponent,
    RecentComponent,
    DialogOverviewExampleDialog
  ],
  entryComponents: [DialogOverviewExampleDialog],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    CustomMaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { SideBarComponent } from '../components//side-bar/side-bar.component';
import { DeckComponent } from '../components//deck/deck.component';
import { ListComponent } from '../components//list/list.component';
import { ContentBedComponent } from '../components//content-bed/content-bed.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SideBarComponent,
    DeckComponent,
    ListComponent,
    ContentBedComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfilComponent } from './profil/profil.component';
import { OpgaverComponent } from './opgaver/opgaver.component';
import { CVComponent } from './cv/cv.component';
import { TimelineComponent } from './timeline/timeline.component';
import { BeviserComponent } from './beviser/beviser.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { ShowDirective } from './show.directive';
import { GameComponent } from './game/game.component';
import { AnimationComponent } from './animation/animation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfilComponent,
    OpgaverComponent,
    CVComponent,
    TimelineComponent,
    BeviserComponent,
    LandingpageComponent,
    HamburgerMenuComponent,
    ShowDirective,
    GameComponent,
    AnimationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

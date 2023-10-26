import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeviserComponent } from './beviser/beviser.component';
import { CVComponent } from './cv/cv.component';
import { HamburgerMenuComponent } from './hamburger-menu/hamburger-menu.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { OpgaverComponent } from './opgaver/opgaver.component';
import { ProfilComponent } from './profil/profil.component';
import { TimelineComponent } from './timeline/timeline.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [/* her skal alle dine sider indsættes så programmet kan finde filerne. OBS _ hvis du ændrer const routes til const fisk, skal du huske at ændre værdien til 'fisk' nede i ng module imports*/
  { path:'',  component: LandingpageComponent},
  { path:'cv',  component: CVComponent},
  { path:'profil',  component: ProfilComponent},
  { path:'opgaver',  component: OpgaverComponent},
  { path:'timeline',  component: TimelineComponent},
  { path:'beviser',  component: BeviserComponent},
  { path:'hamburgermenu',  component: HamburgerMenuComponent},
  {path: 'game', component: GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

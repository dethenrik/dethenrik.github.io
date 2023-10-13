import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BeviserComponent } from './beviser/beviser.component';
import { CVComponent } from './cv/cv.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { OpgaverComponent } from './opgaver/opgaver.component';
import { ProfilComponent } from './profil/profil.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [/* her skal alle dine sider indsættes så programmet kan finde filerne. OBS _ hvis du ændrer const routes til const fisk, skal du huske at ændre værdien til 'fisk' nede i ng module imports*/
  { path:'',  component: LandingpageComponent},
  { path:'cv',  component: CVComponent},
  { path:'profil',  component: ProfilComponent},
  { path:'opgaver',  component: OpgaverComponent},
  { path:'timeline',  component: TimelineComponent},
  { path:'beviser',  component: BeviserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

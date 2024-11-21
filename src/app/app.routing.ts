import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CvComponent } from './cv/cv.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';

const myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'cv', component: CvComponent },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'accounts', component: HomeAccountComponent },
];

export const PLB_ROUTING = RouterModule.forRoot(myRoutes);

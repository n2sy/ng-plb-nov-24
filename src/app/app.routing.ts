import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { CvComponent } from './cv/cv.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ReactFormComponent } from './react-form/react-form.component';

const myRoutes: Routes = [
  //   { path: '', component: AccueilComponent },
  //   {
  //     path: 'cv',
  //     component: CvComponent,
  //     children: [
  //       { path: 'add', component: AddComponent },
  //       {
  //         path: ':id',
  //         children: [
  //           { path: '', component: InfosComponent },
  //           { path: 'edit', component: EditComponent },
  //         ],
  //       },
  //     ],
  //   },
  //   { path: 'ms-word', component: MsWordComponent },
  //   { path: 'accounts', component: HomeAccountComponent },
  //   { path: 'not-found', component: NotFoundComponent },
  //   { path: '**', redirectTo: 'not-found' },
  // ];
  //const myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent },
      {
        path: ':id',
        children: [
          { path: '', component: InfosComponent },
          { path: 'edit', component: EditComponent },
        ],
      },
    ],
  },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'react', component: ReactFormComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'servers',
    loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule),
  },
  { path: 'accounts', component: HomeAccountComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

export const PLB_ROUTING = RouterModule.forRoot(myRoutes);

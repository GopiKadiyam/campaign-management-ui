import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGaurdService } from './@core/gaurds/auth-gaurd.service';

export const routes: Routes = [
  {
    path: 'app',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
    canLoad:[AuthGaurdService]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth-page/auth-page.module')
      .then(m => m.AuthPageModule)
  },
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}

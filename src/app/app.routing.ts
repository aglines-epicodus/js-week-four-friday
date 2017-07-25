
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AddressComponent } from './address/address.component';


const appRoutes: Routes = [

  {
    path: '',
    component: WelcomeComponent
  }

]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { RideServicesComponent } from './pages/ride-services/ride-services.component';

const routes: Routes = [
   { path: 'home', component: HomeComponent },
   { path: 'ride-services', component: RideServicesComponent },
   { path: 'about', component: AboutComponent },
   { path: 'contact', component: ContactComponent },
   { path: '', pathMatch: 'full', redirectTo: '/ride-services' },
   { path: '**', pathMatch: 'full', redirectTo: '/ride-services' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RideServicesComponent } from './ride-services/ride-services.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, AboutComponent, ContactComponent, RideServicesComponent]
})
export class PagesModule { }

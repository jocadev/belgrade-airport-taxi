import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RideServicesComponent } from './ride-services/ride-services.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule, FormsModule,  AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })
  ],
  declarations: [HomeComponent, AboutComponent, ContactComponent, RideServicesComponent]
})
export class PagesModule { }

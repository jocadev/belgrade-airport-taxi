import { Component, OnInit } from '@angular/core';
import { Destination } from './destination';
import { Pricing } from './pricing';
import { Passenger} from '../passenger';
import { AirportService } from '../../airport.service';
import { SaveMessageService } from '../../save-message.service';
import {b} from '@angular/core/src/render3';

@Component({
  selector: 'app-ride-services',
  templateUrl: './ride-services.component.html',
  styleUrls: ['./ride-services.component.scss']
})
export class RideServicesComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  passenger: Passenger;
  potentialPassenger: Passenger;
  bookDestination: boolean;
  bookDestinationName: string;
  bookDestinationDetails: string;
  destination: Destination[];
  pricings = [
      new Pricing(1, 1.99, 'classic', 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. ' +
          'Etiam fermentum nulla ac tincidunt malesuada. Sed volutpat semper elit quis pharetra.'),
      new Pricing(2, 2.99, 'night', 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. ' +
          'Etiam fermentum nulla ac tincidunt malesuada. Sed volutpat semper elit quis pharetra.'),
      new Pricing(3, 3.99, 'holiday', 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. ' +
          'Etiam fermentum nulla ac tincidunt malesuada. Sed volutpat semper elit quis pharetra.')
  ];
  getDestinations(): void {
   this.airportService.getDestinations()
     .subscribe(a => this.destination = a);
  }

  bookRide(firstName, lastName, userEmail, userPhone, bookDestinationName) {
    let message: string;
    message = '';
    message = message.concat('User: ', firstName, lastName, ' with email:', userEmail, ' wants to book ride to: ', bookDestinationName );
    this.saveMessageService.sendMessage(message);
    this.bookDestination = false;
  }

  cancelMessage() {
    this.bookDestination = false;
  }

  checkRequest(firstName, lastName, userEmail, userPhone, pickUp, bringMe) {
    let message: string;
    message = '';
    message = message.concat('User: ', firstName, lastName, ' with email:', userEmail, ' wants to book ride from: ', pickUp, ' to: ', bringMe );
    this.bookDestination = false;
    this.saveMessageService.sendMessage(message);
}

  bookTopDestination( bookDestination, details) {
    this.bookDestination = true;
    this.bookDestinationName = bookDestination;
    this.bookDestinationDetails = details;
  }

  constructor(private airportService: AirportService, private saveMessageService: SaveMessageService) {
    this.passenger = new Passenger();
    this.potentialPassenger = new Passenger();
  }

  ngOnInit() {
    this.getDestinations();
  }

}

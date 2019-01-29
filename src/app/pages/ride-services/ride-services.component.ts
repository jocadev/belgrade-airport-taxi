import { Component, OnInit } from '@angular/core';
import { Destination } from './destination';
import { Pricing } from './pricing';
import { Passenger} from '../passenger';
import { AirportService } from '../../airport.service';

@Component({
  selector: 'app-ride-services',
  templateUrl: './ride-services.component.html',
  styleUrls: ['./ride-services.component.scss']
})
export class RideServicesComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  passenger: Passenger;
  bookDestination: boolean;
  bookDestinationName: string;
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
  checkRequest( ) {
    this.bookDestination = false;
  }

  bookTopDestination( bookDestination) {
    this.bookDestination = true;
    this.bookDestinationName = bookDestination;
  }

  constructor(private airportService: AirportService) {
    this.passenger = new Passenger();
  }

  ngOnInit() {
    this.getDestinations();
  }

}

import { Component, OnInit } from '@angular/core';
import { Destination } from './destination';
import { Pricing } from './pricing';

@Component({
  selector: 'app-ride-services',
  templateUrl: './ride-services.component.html',
  styleUrls: ['./ride-services.component.scss']
})
export class RideServicesComponent implements OnInit {

  destinations = [
    new Destination(1, 49, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices ' +
        'posuere cubilia Curaee sovray plugne ultrices posuere.', 'Zlatibor' ),
    new Destination(2, 59, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices ' +
        'posuere cubilia Curaee sovray plugne ultrices posuere.', 'Kopaonik' ),
    new Destination(2, 29, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices' +
        ' posuere cubilia Curaee sovray plugne ultrices posuere.', 'Novi Sad' ),
    new Destination(2, 39, 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices' +
        ' posuere cubilia Curaee sovray plugne ultrices posuere.', 'Nis' ),
  ];

  pricings = [
      new Pricing(1, 1.99, 'classic', 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. ' +
          'Etiam fermentum nulla ac tincidunt malesuada. Sed volutpat semper elit quis pharetra.'),
      new Pricing(2, 2.99, 'night', 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. ' +
          'Etiam fermentum nulla ac tincidunt malesuada. Sed volutpat semper elit quis pharetra.'),
      new Pricing(3, 3.99, 'holiday', 'Lorem ipsum dolor sit amet, consectetur adip iscing elit. ' +
          'Etiam fermentum nulla ac tincidunt malesuada. Sed volutpat semper elit quis pharetra.')
  ];
  constructor() { }

  ngOnInit() {
  }

}

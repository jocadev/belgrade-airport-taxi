import { Component, OnInit } from '@angular/core';
import { Passenger} from '../passenger';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
        public passenger: Passenger;

    showMessage() {
        if (this.passenger.firstName !== '' || this.passenger.firstName !== '') {
            this.passenger.showMessagePanel = true;
        }
        this.passenger.showMessagePanel = true;
    }

  constructor() {
      this.passenger = new Passenger();
      this.passenger.firstName = "Joca" ;
  }

  ngOnInit() {
  }

}

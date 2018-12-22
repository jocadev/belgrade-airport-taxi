import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

firstName: string;
lastName: string;
userEmail: string;
userPhone: number;
textMessage: string;
showMessagePanel: boolean;

    showMessage() {
        if (this.firstName !== '' || this.firstName !== '') {
            this.showMessagePanel = true;
        }
        this.showMessagePanel = true;
    }

  constructor() { }

  ngOnInit() {
  }

}

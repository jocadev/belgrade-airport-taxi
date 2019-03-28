import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaveMessageService {
  messages: string[] = [];
  sendMessage(msg: string) {
    // this should be service to insert message in database
    this.messages.push(msg);
  }
  clear() {
    this.messages = [];
  }
  constructor() { }
}

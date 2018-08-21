import { Injectable } from '@angular/core';
import { AngularFireFunctions } from 'angularfire2/functions';
import { Message } from '../../models/models'

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private aff: AngularFireFunctions) { }

  async send(message: Message) {
    let from = message.form;
    let text = message.form;

    const res =  await this.aff
      .httpsCallable('sendMessage')({from, text})
      .toPromise();
  }
}

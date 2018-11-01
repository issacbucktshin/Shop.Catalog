import { Component} from '@angular/core';
import { MessagesService } from '../../shared/services/messages/messages.service';
import { MessageModel } from '../../models/models';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})

export class ContactusComponent  {

  loading:boolean = false;

  constructor(private messagesService: MessagesService) {}

  submit() {
    this.toggleLoader();

    let message = new MessageModel;
    message.form = 'issac688@gmail.com';
    message.text = 'angular 6 test messages';

    this.messagesService.send(message)
      .catch((error) => console.log('ERROR: ',  error))
      .then((response) =>
        {
          this.toggleLoader();
          console.log(response)
        })
  }

  toggleLoader() {
    this.loading = !this.loading;
  }
}
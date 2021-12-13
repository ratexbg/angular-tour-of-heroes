import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {} //deklarirane na publichen messageService ot tip MessageService; shte bude bind-nat za template-a zaradi tva e public

  ngOnInit(): void {
  }

}

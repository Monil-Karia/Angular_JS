import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  message: string = '';

  constructor(private messageService: MessageService) {}

  sendMessage() {
    this.messageService.sendMessage(this.message);
    this.message = ''; 
  }
}
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit {
  message: string = '';

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.currentMessage$.subscribe(message => {
      this.message = message;
    });
  }
}

import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    { id: 1, text: 'test2' },
    { id: 2, text: 'test1' },
    { id: 3, text: 'test3' }
  ];

  update(id, text) {
    this.messages = this.messages.map(m =>
      m.id === id
        ? { id, text }
        : m
    );
  }

  constructor() {
  }

}

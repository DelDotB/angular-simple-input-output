import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'goodbye',
  template: `<h3 (click)="onClick.emit('Trinity')">This is the goodbye component. I received a string '{{myFriend}}' from the app component. Click me to see the effect</h3>`
})
export class GoodbyeComponent  {
  @Input() myFriend: string;
  @Output() onClick = new EventEmitter()
}

import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { DataService } from "./services/data.service";

@Component({
  selector: 'goodbye',
  template: `<h3 (click)="onClick.emit('Trinity')">goodbye component. received string '{{myFriend}}' from the app component. Click me</h3>`
})
export class GoodbyeComponent implements OnInit {
  @Input() myFriend: string;
  @Output() onClick = new EventEmitter()

  constructor(private  data: DataService) {}

  ngOnInit() {
  }

}

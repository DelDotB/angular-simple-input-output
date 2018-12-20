import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { DataService } from "./services/data.service";

@Component({
  selector: "hello",
  template: `<h3 (click)="onClick.emit('Neo')"> hello component. received string '{{ myFriend }}' from the app component. Click me</h3>`
})

export class HelloComponent implements OnInit {

  @Input() myFriend: string;
  @Output() onClick = new EventEmitter();

  constructor(private  data: DataService) {}

  ngOnInit() {
  }
}

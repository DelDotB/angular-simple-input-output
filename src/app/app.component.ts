import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  ng = 'Angular'
  result = ''

  upCase(st:string): void {
    this.result = "This is the app component. I received a string '" + st + "' from the hello component" 
    + " and I capitalize it here " + st.toUpperCase()
  }
}

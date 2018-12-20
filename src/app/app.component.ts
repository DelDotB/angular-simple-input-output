import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  ng = 'Angular'
  result = ''

  upCase(st:string, fromStr: string): void {
    this.result = "This is the app component. I received a string '" + st + "' from a " + fromStr + " component" 
    + " and I capitalize it here " + st.toUpperCase()
  }
}

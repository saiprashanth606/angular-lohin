import { Component, VERSION } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  //registrationForm =new FormGroup()
  get()
  {
    alert("welcome...!");
  }
}

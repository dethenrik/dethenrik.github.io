import { Component } from '@angular/core';
declare function OpenImage():void; {
}
@Component({
  selector: 'app-beviser',
  templateUrl: './beviser.component.html',
  styleUrls: ['./beviser.component.css']
})
export class BeviserComponent {
  ngoninit():void {
    OpenImage();
  }
}

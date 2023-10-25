import { Component } from '@angular/core';
declare function openNav():void; {}
@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.css']
})
export class HamburgerMenuComponent {
  ngoninit():void {
    openNav();
  }
}

import { Component } from '@angular/core';
declare function animate(): void; {}
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  ngonload():void {
    animate();
  }
}

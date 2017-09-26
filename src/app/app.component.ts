import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Player } from './player.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  masterPlayer: Player;

  @Input() newPlayerFromChild: Player;
  // @Output() playerSender = new EventEmitter();

  title = 'Murder on the Coast Starlight';

  addPlayer(newPlayerFromChild: Player) {
    this.masterPlayer = newPlayerFromChild;
  }
}

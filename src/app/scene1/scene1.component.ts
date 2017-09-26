import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-scene1',
  templateUrl: './scene1.component.html',
  styleUrls: ['./scene1.component.css']
})
export class Scene1Component implements OnInit {
  // currentPlayer: Player;
  @Input() currentPlayer: Player;
  // currentPlayer: Player = this.childPlayer;

  constructor() { }

  ngOnInit() {
  }

}

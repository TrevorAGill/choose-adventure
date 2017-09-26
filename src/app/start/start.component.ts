import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Player } from '../player.model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  @Output() newPlayerSender = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  createPlayer(name: string, role: string) {
    var newPlayer: Player = new Player(name,role);
    this.n
  }

}

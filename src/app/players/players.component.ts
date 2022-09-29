import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player';
import { SupabaseService } from '../supabase.service';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  newPlayerName: string = '';
  players: Player[] = this.supabase.fetchPlayers();
  selectedPlayer;

  constructor(private readonly supabase: SupabaseService) {}

  ngOnInit() {}

  async addNewPlayer() {
    let { data: player, error } = await this.supabase.AddPlayer(
      new {
        name: this.newPlayerName,
      }()
    );

    if (error) {
      alert(error.message);
    } else {
      player.push(player);
    }
  }
}

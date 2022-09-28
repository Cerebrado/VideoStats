import { Component, OnInit } from '@angular/core';
import { Player } from '../model/player';
import {createClient, SupabaseClient} from '@supabase/supabase-js'

import { environment } from '../environment';
@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent implements OnInit {
  newPlayerName: string = '';
  players: Player[];
  selectedPlayer;
  supabase: SupabaseClient;


  constructor() {
    this.supabase = createClient(
      environment.supabaseUrl,
      environment.supabaseKey
    )
  }

  ngOnInit() {}

  async addNewPlayer() {
    var dataError = await this.supabase
    .from('Players')
    .insert({
        name: this.newPlayerName
    })

  }
}

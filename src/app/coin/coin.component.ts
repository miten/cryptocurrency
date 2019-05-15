import {Component, Input, OnInit} from '@angular/core';
import {Coin} from '../models/coin';
import {Socket} from 'ngx-socket-io';
import {ApiService} from '../api.service';
import {filter} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  @Input() id: any;
  coin: Coin;

  coin$: Observable<any>;

  constructor(private socket: Socket, private api: ApiService) { }

  ngOnInit() {
    this.coin = new Coin(this.id, null);
    this.socket.emit('SubAdd', {'subs': ['5~CCCAGG~' + this.coin.name + '~USD']});

    this.coin$ = this.api.update().pipe(filter(x => x.name === this.coin.name));
  }

}

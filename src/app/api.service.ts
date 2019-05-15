import { Injectable } from '@angular/core';
import {Socket} from 'ngx-socket-io';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Coin} from './models/coin';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api_url = 'https://min-api.cryptocompare.com';
  coin = {name: 'BTC'};

  constructor(private http: HttpClient, private socket: Socket) {
  }


  coins(limit: number) {
     return this.http.get(`${this.api_url}/data/top/totalvolfull?limit=${limit}&tsym=USD`).toPromise()
       .then(data => data['Data'])
       .catch(err => console.log(err));
  }

  update(): Observable<any> {
    return this.socket.fromEvent<any>('m').pipe(map(data => new Coin(null, data.split('~'))));
  }


}

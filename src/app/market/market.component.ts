import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Router, Event, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  coins: Observable<any>;
  searchText: string;

  constructor(private route: ActivatedRoute) {}


  ngOnInit() {
    this.coins = this.route.snapshot.data.coins;
  }
}

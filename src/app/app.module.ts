import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketComponent } from './market/market.component';
import { CoinComponent } from './coin/coin.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressBarModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { FilterPipe } from './pipe/filter.pipe';
import {FormsModule} from '@angular/forms';
import {APIResolver} from './resolver';

const config: SocketIoConfig = { url: 'https://streamer.cryptocompare.com', options: {} };



@NgModule({
  declarations: [
    AppComponent,
    MarketComponent,
    CoinComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SocketIoModule.forRoot(config),
    FormsModule,

    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatProgressSpinnerModule,

    MatCardModule
  ],
  providers: [APIResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

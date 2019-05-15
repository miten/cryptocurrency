import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MarketComponent} from './market/market.component';
import {APIResolver} from './resolver';

const routes: Routes = [
  { path: '', component: MarketComponent, resolve: { coins: APIResolver } },
  { path: '**', component: MarketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [APIResolver]
})
export class AppRoutingModule { }

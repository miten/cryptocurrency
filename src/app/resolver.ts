import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Resolve } from '@angular/router';

@Injectable()
export class APIResolver implements Resolve<any> {

  constructor( private apiService: ApiService ) {}

  resolve(): Promise<any> {
    return this.apiService.coins(20);
  }
}

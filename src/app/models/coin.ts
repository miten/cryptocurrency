export class Coin {
  name: string;
  price: number;
  img: string;
  up: boolean;
  down: boolean;

  constructor(data, livedata) {

    if (livedata === null) {
      this.name  = data.CoinInfo.Name;
      this.price  = data.RAW.USD.PRICE;
      this.img  = `https://www.cryptocompare.com${data.CoinInfo.ImageUrl}`;
    }
    else {
      this.name = livedata[2];
      this.price  = livedata[5];
      this.up = livedata[4] === '1' ? true : false;
      this.down = livedata[4] === '2' ? true : false;
    }

  }


  livecoin(data) {
    this.name  = data.CoinInfo.Name;
    this.price  = data.RAW.USD.PRICE;
    this.img  = `https://www.cryptocompare.com${data.CoinInfo.ImageUrl}`;
  }
}

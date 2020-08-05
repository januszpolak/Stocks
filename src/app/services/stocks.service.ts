import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

let stocks: Array<string> = ["AAPL", "GOOG", "FB", "AMZN", "TWTR"];
let service: string = "https://angular2-in-action-api.herokuapp.com";

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: string;
  change: number;
  changeInPercent: number;
}

@Injectable({
  providedIn: "root",
})
export class StocksService {
  constructor(private http: HttpClient) {}

  GetStocks() {
    return stocks.slice();
  }

  AddStock(stock) {
    stocks.push();
    return this.GetStocks();
  }

  RemoveStock(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.GetStocks();
  }

  LoadStocks(symbols) {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(
        service + "/stocks/snapshot?symbols=" + symbols.join()
      );
    }
  }
}

import {Component, OnInit} from '@angular/core';
import 'rxjs/Rx'; // used by Observable.take()

import {Http} from '@angular/http';
import {HandType} from "../../app/lib/hand";
@Component({
  selector: 'page-strength',
  templateUrl: 'strength.html'
})
export class StrenthPage implements OnInit {
  public numOfPlayers:number = 2;
  public loaded = false;
  public handType:HandType = HandType.TwoPairs;
  private data;

  public onNumOfPlayersChange($event) {
    this.loadNewData();
  }
  private async loadNewData() {
    this.loaded = false;
    this.data = (await this.http
      .get(`/assets/simdata/beatsRatio-${this.numOfPlayers}-players.json`)
      .toPromise()).json();
    this.loaded = true;
  }
  async ngOnInit() {
    this.loadNewData();
  }

  constructor(private http: Http) {

  }

  getHandTypeStr() {
    return HandType[this.handType];
  }

}

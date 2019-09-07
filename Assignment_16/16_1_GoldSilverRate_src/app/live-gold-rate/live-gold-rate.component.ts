import { Component, OnInit } from '@angular/core';
import { GoldSilverSharedService } from '../shared/gold-silver-shared.service';

@Component({
  selector: 'app-live-gold-rate',
  templateUrl: './live-gold-rate.component.html',
  styleUrls: ['./live-gold-rate.component.css']
})
export class LiveGoldRateComponent implements OnInit {


  goldDetailArray = [];

  constructor(private goldSilverSharedService: GoldSilverSharedService) { }

  ngOnInit() {

     this.goldSilverSharedService.getGoldDetails().subscribe(
      list => {
        this.goldDetailArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

}

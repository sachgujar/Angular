import { Component, OnInit } from '@angular/core';
import { GoldSilverSharedService } from '../shared/gold-silver-shared.service';

@Component({
  selector: 'app-live-silver-rate',
  templateUrl: './live-silver-rate.component.html',
  styleUrls: ['./live-silver-rate.component.css']
})
export class LiveSilverRateComponent implements OnInit {

  silverDetailArray = [];
  constructor(private goldSilverSharedService: GoldSilverSharedService) { }

  ngOnInit() {
    this.goldSilverSharedService.getSilverDetails().subscribe(
      list => {
        this.silverDetailArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };

        });
      });

      console.log(this.silverDetailArray)
  }

}

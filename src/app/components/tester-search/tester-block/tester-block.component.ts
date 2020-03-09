import {Component, Input, OnInit} from '@angular/core';
import {TesterInfo} from '../../../models/tester-info';
import {Device} from '../../../models/device';


@Component({
  selector: 'app-tester-block',
  templateUrl: './tester-block.component.html',
  styleUrls: ['./tester-block.component.scss']
})
export class TesterBlockComponent implements OnInit {
  @Input() tester: TesterInfo;
  @Input() devices: Device[];
  fullName: string;
  filledBugsOnDevices: number;
  bugs: Map<string, number> = new Map<string, number>();
  bugEntries: any[];

  constructor() {
  }

  ngOnInit() {

    this.fullName = `${this.tester.firstName} ${this.tester.lastName}`;
    this.filledBugsOnDevices = this.calculateTotalBugCount();
    this.calculateBugsPerDevice();

  }


  calculateBugsPerDevice() {
    for (var m in this.tester.bugsByDevice) {
      let currDevice = this.devices.filter(el => el.deviceId == m);
      this.bugs.set(currDevice[0].description, this.tester.bugsByDevice[m].length);
    }
    this.bugEntries = Array.from(this.bugs.entries());
  }


  calculateTotalBugCount() {
    let count = 0;
    for (var m in this.tester.bugsByDevice) {
      count += this.tester.bugsByDevice[m].length;
    }

    return count;
  }

}

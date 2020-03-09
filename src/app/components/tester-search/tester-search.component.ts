import {Component, OnInit} from '@angular/core';
import {TesterSearchService} from '../../services/tester-search.service';
import {TesterInfo} from '../../models/tester-info';
import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-tester-search',
  templateUrl: './tester-search.component.html',
  styleUrls: ['./tester-search.component.scss']
})
export class TesterSearchComponent implements OnInit {
  deviceDropdownList = [];
  deviceSelectedItems = [];
  countryDropdownList = [];
  countrySelectedItems = [];
  deviceDropdownSettings = {};
  countryDropdownSettings = {};
  foundTesters: TesterInfo[];
  public loading = false;

  constructor(private testerSearchService: TesterSearchService,
              private toastr: ToastrService) {
  }

  ngOnInit() {

    this.testerSearchService.getDevices().subscribe(response => {
      this.deviceDropdownList = response;
    });

    this.testerSearchService.getCountries().subscribe(response => {
      this.countryDropdownList = response;
    });


    this.deviceDropdownSettings = {
      singleSelection: false,
      idField: 'deviceId',
      textField: 'description',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };

    this.countryDropdownSettings = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 4,
      allowSearchFilter: true
    };


  }

  deviceOnSelect(ev) {
    this.deviceSelectedItems.push(ev.deviceId);
  }

  deviceOnSelectAll(ev) {
    this.deviceSelectedItems = ev.map(el => el.deviceId);
  }

  deviceOnDeSelectAll(ev) {
    this.deviceSelectedItems = [];
  }


  performSearch() {
    if (this.countrySelectedItems.length < 1) {
      this.toastr.error('Please select countries', 'Error!', {positionClass: 'toast-bottom-right'});
    } else if (this.deviceSelectedItems.length < 1) {
      this.toastr.error('Please select devices', 'Error!', {positionClass: 'toast-bottom-right'});
    } else {
      this.loading = true;
      this.foundTesters = null;
      this.testerSearchService.findTesters(this.deviceSelectedItems, this.countrySelectedItems).subscribe(response => {
        this.foundTesters = response;
        this.loading = false;
      });
    }

  }

  sort(array) {
    return array.sort((a, b) => b.totalBugsCount - a.totalBugsCount);
  }

}

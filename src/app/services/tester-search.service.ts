import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {TesterInfo} from '../models/tester-info';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Device} from '../models/device';

@Injectable({
  providedIn: 'root'
})
export class TesterSearchService {
  private readonly testerListController = environment.apiUrls.testerListController.url;
  private readonly deviceListController = environment.apiUrls.deviceListController.url;
  private readonly countryListController = environment.apiUrls.countryListController.url;
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }


  findTesters(deviceId: string[], country: string[]) {
    const url = this.createUrl(this.testerListController, '', '');
    let requestParams = this.getParams(deviceId, country);
    return this.http.get<TesterInfo[]>(url, this.createHttpOptions(requestParams));
  }

  getDevices() {
    const url = this.createUrl(this.deviceListController, '', '');
    return this.http.get<Device[]>(url, this.createHttpOptions());
  }

  getCountries() {
    const url = this.createUrl(this.countryListController, '', '');
    return this.http.get<string[]>(url, this.createHttpOptions());
  }

  private createUrl(controllerUrl: string, operationUrl: string, ...pathParams: string[]) {
    const baseUrl: string = this.apiUrl;
    return [baseUrl, controllerUrl, operationUrl, ...pathParams].filter(value => value).join('/');
  }

  private createHttpOptions(queryParams?) {
    return {
      params: queryParams
    };
  }

  private getParams(deviceId: string[], country: string[]) {
    let result = new HttpParams();
    deviceId.forEach(value => {
      result = result.append('deviceId', value);
    });

    country.forEach(value => {
      result = result.append('country', value);
    });

    return result;
  }

}



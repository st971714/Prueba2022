import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
// @ts-ignore
import { ApiRequest } from '../../../../../assets/js/request';
@Injectable({
  providedIn: 'root',
})
export class ApiInformationService {
  constructor() {}

  public async getInformation(urlEndpoint: string, method: string) {
    return await ApiRequest.get<any>(urlEndpoint, method);
  }

  public async postData(urlEndpoint: string, method: string, bodyInfo: any) {
    return await ApiRequest.post<any>(urlEndpoint, method, bodyInfo);
  }
}

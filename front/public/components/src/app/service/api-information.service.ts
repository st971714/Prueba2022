import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiInformationService {
  constructor(private http: HttpClient) {}

  apiPath: string = 'Prueba2022/private/';

  public getInformation(urlEndpoint: string, method: string): Observable<any> {
    return this.http
      .get<any>(`${this.apiPath + urlEndpoint + '/' + method}`)
      .pipe(take(1));
  }

  public postData(urlEndpoint: string, bodyInfo: any): Observable<any> {
    return this.http
      .post<any>(`${this.apiPath + urlEndpoint}`, bodyInfo)
      .pipe(take(1));
  }
}

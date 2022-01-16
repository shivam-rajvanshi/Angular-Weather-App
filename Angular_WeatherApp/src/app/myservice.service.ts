import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }


  getData(value: String) {
    let apiUrl = `http://api.weatherapi.com/v1/current.json?key=572c9920cdf44a7babf175428212710&q=${value}&aqi=yes`;
  
    return this.http.get(apiUrl);
  }
  getAqi(aqi: any) {
    let apiUrl = `https://api.weatherbit.io/v2.0/current/airquality?lat=${aqi.latitude}&lon=${aqi.longitude}&key=2c07b15ccc404002a543d8b94c4f1b3b`;
    return this.http.get(apiUrl);
  }
}
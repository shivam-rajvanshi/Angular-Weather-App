import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-app';

  ourform = new FormGroup({
    formName: new FormControl(''),
  });

  cityData: any = {};

  aqiData: any = {};

  constructor(private myservice: MyserviceService) { }

  submitData(event: any) {
    event.preventDefault();
    console.log(this.ourform.value.formName);

    this.myservice.getData(this.ourform.value.formName).subscribe(data => {
      console.log(data);
      this.cityData = data;

      let latitude = 1;
      let longitude = 2;
      latitude = this.cityData.location.lat;
      longitude = this.cityData.location.lon;

      this.myservice.getAqi({ latitude: latitude, longitude: longitude }).subscribe(data => {
        this.aqiData = data;
      }, (error) => {
        console.log(error);
      })
    })
  }





}


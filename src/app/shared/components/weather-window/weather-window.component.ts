import { Component, OnInit } from '@angular/core';
import { Weather } from '../../models/weather';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-window',
  templateUrl: './weather-window.component.html',
  styleUrls: ['./weather-window.component.css']
})
export class WeatherWindowComponent implements OnInit {

  weather: Weather;
  windDirectionParsed: string;
  currentDateTime: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getAllNews();
    this.currentDateTime = new Date(Date.now()).toDateString();
  }

  getAllNews() {
    this.weatherService.getAll().subscribe(data => {
      this.weather = data;
      this.windDirectionParse(this.weather.data[0].wind_cdir);
      console.log(data)
      console.log(new Date())
    },
      (err: string) => {
        alert(err);
      });
  }

  windDirectionParse(windDir) {
    if (windDir === 'N') {
      this.windDirectionParsed = 'fa-arrow-top';
    } else if (windDir === 'E') {
      this.windDirectionParsed = 'right';
    } else if (windDir === 'W') {
      this.windDirectionParsed = 'left';
    } else if (windDir === 'S') {
      this.windDirectionParsed = 'down';
    } else if (windDir === 'SSE' || windDir === 'ESE' || windDir === 'SE') {
      this.windDirectionParsed = 'down rotate-45-left';
    } else if (windDir === 'NNE' || windDir === 'NE' || windDir === 'ENE') {
      this.windDirectionParsed = 'up rotate-45-right';

    } else if (windDir === 'NNW' || windDir === 'NW' || windDir === 'WNW') {
      this.windDirectionParsed = 'up rotate-45-left';
    } else if (windDir === 'SSW' || windDir === 'SW' || windDir === 'WSW') {
      this.windDirectionParsed = 'fa-arrow-down rotate-45-right';
    }
    else {
      this.windDirectionParsed = 'fa-arrows-alt';
    }
  }
}

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
    this.getWeather();
    this.currentDateTime = new Date(Date.now()).toDateString();
  }

  getWeather() {
    this.weatherService.getWeather().subscribe(data => {
      this.weather = data;
      if (this.weather) {
        this.weather.data.forEach(element => {
          this.windDirectionParsed = this.windDirectionParse(element.wind_cdir);
        });
      } else {
        this.windDirectionParsed = 's-alt';
      }
    },
      (err: string) => {
        console.error(err);
      });
  }

  windDirectionParse(windDir) {
    switch (windDir) {
      case 'N':
        return '-up';
      case 'E':
        return '-right';
      case 'W':
        return '-left';
      case 'S':
        return '-down';
      case 'SSE': case 'ESE': case 'SE':
        return '-down rotate-45-left';
      case 'NNE': case 'NE': case 'ENE':
        return '-up rotate-45-right';
      case 'NNW': case 'NW': case 'WNW':
        return '-up rotate-45-left';
      case 'SSW': case 'SW': case 'WSW':
        return '-down rotate-45-right';
      default:
        return 's-alt';
    }
  }
}

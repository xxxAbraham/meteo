import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { City_info } from '../../interface/City_info';
import { Platform } from 'ionic-angular';



/*
  Generated class for the MeteoApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MeteoApiProvider {
  private baseUrl : string = "../../assets/api/meteo.json"


  constructor(public http: HttpClient,public plateform: Platform) {
    console.log('Hello MovieApiProvider Provider');
    if(this.plateform.is("cordova") && this.plateform.is("android")){
      this.baseUrl = "/android_asset/www/assets/api/meteo.json"
    }
  }

  getInfos(): Observable<any>{
    return this.http.get(this.baseUrl)
  }

}

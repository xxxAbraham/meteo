import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { City_info } from '../../interface/City_info';
import { Fcst_day } from '../../interface/Fc_day';
import { MeteoApiProvider } from '../../providers/meteo-api/meteo-api';
import { Current_condition } from '../../interface/Current_condition';


/**
 * Generated class for the MeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {


  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public meteoApiProviders: MeteoApiProvider,) {
  }
  

  meteo: City_info[] = new Array();
  day: Fcst_day [] = new Array();
  condition: Current_condition[] = new Array();
  day_value:String = this.navParams.get('day_value');

  changeDay(Day:String){
    console.log("Click")
    console.log(Day)
    if(Day=="Mercredi"){
      this.day_value === "fcst_day_0";
      this.navCtrl.push(MeteoPage, {day_value: "fcst_day_0" });
    }
    if(Day=="Jeudi"){
      this.day_value === "fcst_day_1";
      this.navCtrl.push(MeteoPage, {day_value: "fcst_day_1" });
    }
    if(Day=="Vendredi"){
      this.day_value === "fcst_day_2";
      this.navCtrl.push(MeteoPage, {day_value: "fcst_day_2" });
    }
    if(Day=="Samedi"){
      this.day_value === "fcst_day_3";
      this.navCtrl.push(MeteoPage, {day_value: "fcst_day_3" });
    }
    if(Day=="Dimanche"){
      this.day_value === "fcst_day_4";
      this.navCtrl.push(MeteoPage, {day_value: "fcst_day_4" });
    }
    }

    onPageDidEnter() {
      this.day_value === this.navParams.get('day_value');
      console.log("Get")
  }
  

  ionViewDidLoad() {
    console.log("Loading")
    console.log(this.day_value)
    this.meteoApiProviders.getInfos().subscribe(data=>{
      this.meteo = data.city_info;
      if(this.day_value==="fcst_day_0"){
        this.day = data.fcst_day_0;
      }
      if(this.day_value==="fcst_day_1"){
        this.day = data.fcst_day_1;
      }
      if(this.day_value==="fcst_day_2"){
        this.day = data.fcst_day_2;
      }
      if(this.day_value==="fcst_day_3"){
        this.day = data.fcst_day_3;
      }
      if(this.day_value==="fcst_day_4"){
        this.day = data.fcst_day_4;
      }
      if(this.day_value===undefined){
        this.day = data.fcst_day_0;
      }
      this.condition = data.current_condition;
      console.log(data)

    })
  }
}



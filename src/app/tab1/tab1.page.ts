
import { Component, OnInit, ViewChild } from "@angular/core";
declare const google: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild("map", { static: true }) mapElement: any;
  map: any;

  constructor() {}
  ngOnInit() {
    const mapProperties = {
      center: new google.maps.LatLng(-33.8569, 151.2152),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      mapProperties
    );
  }
}

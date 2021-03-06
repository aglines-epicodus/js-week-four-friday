import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';

@Injectable()
export class GeocodeService {

  constructor(private http: Http) { }

  getLatlongFromAddress(address: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=" + geoKey)
  }

  getAddressFromLatLong(lat: string, long: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=" + geoKey)
  }

}

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

}


// google address :
// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

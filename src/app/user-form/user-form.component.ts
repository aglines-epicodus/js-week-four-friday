import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GeocodeService } from '../geocode.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers: [GeocodeService]
})

export class UserFormComponent {

  constructor(private geocodeService: GeocodeService) { }

  result: any = null;
  userLat: any = null;
  userLong: any = null;
  address: any = null;

  getLatlongFromAddress(address: string) {
    this.geocodeService.getLatlongFromAddress(address).subscribe(response => {
      this.result = response.json();
      // console.log(this.result);
      this.userLat = this.result.results[0].geometry.location.lat;
      this.userLong = this.result.results[0].geometry.location.lng;
      console.log("lat and long: " + this.userLat + " " + this.userLong);
    });
  }

  getAddressFromLatLong(lat: string, long: string) {
    this.geocodeService.getAddressFromLatLong(lat, long).subscribe(response => {
      this.result = response.json();
      this.address = this.result.results[0].formatted_address;
      console.log("address result is " + this.address);
    });
  }

}

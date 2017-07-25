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

  getLatlongFromAddress(address: string) {
    this.geocodeService.getLatlongFromAddress(address).subscribe(response => {
      this.result = response.json();
      console.log(this.result);
      this.userLat = this.result.results[0].geometry.location.lat;
      console.log(this.userLat);
    });
  }

}

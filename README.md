# Geocache API

#### An Epicodus independent project

#### By Andrew Glines

## Description

This app will allow a user to enter either an address or a latitude / longitude, and the user will receive all of those pieces of data back.

|Behavior| Input (User Action/Selection) |Output|
|---|:---|:---|
| User can enter an address of as little or as specific as they desire, and receive the lat/long of that address | "100 E Main" | Latitude: 34.9499851, Longitude: -81.9311803, Address: 100 E Main St, Spartanburg, SC 29306, USA |
| User can enter a latitude and longitude and receive an approximate address back | Latitude "30", Longitude "-90" | Latitude: 35.0000164, Longitude: -90.0000326, Address: 5435 Lastrada St, Memphis, TN 38116, USA |


## Setup
- Clone the repo to your desktop.
- Run `npm install` and `bower install`.
- Run `npm install promise-polyfill --save-exact`
- You will need a Google Maps API key, saved to a file called api-keys.ts
- Run `ng serve` for a dev server. Navigate to http://localhost:4200/ in a web browser.


## Support and contact details
To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

If you have any issues or have questions, ideas, concerns, or contributions please contact the contributor through Github.

## Technologies Used
* Angular
* API
* Bootstrap
* HTML

### License
This software is licensed under the MIT license.

Copyright (c) 2017 Andrew Glines and Epicodus

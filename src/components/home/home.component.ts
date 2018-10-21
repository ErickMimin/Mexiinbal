import { Component, OnInit } from '@angular/core';
declare let google;
declare let $ ;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
	site : number = 1;
	menuActive : boolean = false;
	googleMap : any ;
	infoWindow = new google.maps.InfoWindow;
    ngOnInit(){
	this.setMapIni();
    }
    setMapIni(): void {
		let uluru =  { lat: 22.9194079, lng: -108.2493843 };//MX Location
		this.googleMap = new google.maps.Map(document.getElementById('geofence-map'), {
			zoom:  15,
			center: uluru,
			streetViewControl: false,
			mapTypeControl: false
		});
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
			  let pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			  };
			  this.infoWindow.setPosition(pos);
			  this.infoWindow.setContent('Tú posición');
			  this.infoWindow.open(this.googleMap);
			  this.googleMap.setCenter(pos);
			}, () => {
			  this.handleLocationError(true, this.infoWindow,this.googleMap.getCenter());
			});
		  } else {
			// Browser doesn't support Geolocation
			this.handleLocationError(false, this.infoWindow, this.googleMap.getCenter());
		  }
		  
	}
	handleLocationError(browserHasGeolocation, infoWindow, pos) : void {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: Fallo en Geolocalización .' :
            'Error: Tú buscador puede no soportar Geolocalización');
        infoWindow.open(this.googleMap);
      }
	mapHeight() :number{
		return window.innerHeight-58;
	}
  
}
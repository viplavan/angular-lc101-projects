import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = "Favorite Photos";
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://newcastlebeach.org/images/siva-pictures-7.webp';
  image3 = 'https://i.pinimg.com/originals/be/bf/d4/bebfd4342f58c6db74e39c3042da8b02.webp';

  constructor() { }

  ngOnInit() {
  }

}

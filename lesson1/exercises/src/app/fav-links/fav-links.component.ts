import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks: string[] = ["https://www.artofliving.org/mahashivratri/who-is-lord-shiva", "https://www.guru99.com/java-platform.html", "https://www.thespruceeats.com/popular-indian-dishes-1957891"]
  constructor() { }

  ngOnInit() {
  }

}

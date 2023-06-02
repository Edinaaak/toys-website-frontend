import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  imagePaths: string[] = [
    'assets/images/slika6.jpg',
    'assets/images/slika10.jpeg',
    'assets/images/slika8.jpeg',
    'assets/images/slika9.jpeg',

  ];

  


}

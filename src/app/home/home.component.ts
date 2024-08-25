import { Component, OnInit, Renderer2 } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut } from 'ng-animate';
import { ElementRef } from '@angular/core';
import { ArtPaintingService } from '../art-painting.service';
import { User } from '../interfaces/User';
import { Store } from '@ngrx/store';
import { SalesService } from '../sales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('carouselAnimation', [
      transition('void => ', useAnimation(fadeIn, { params: { time: '200ms' } })),
      transition(' => void', useAnimation(fadeOut, { params: { time: '200ms' } }))
    ])
  ]
})
export class HomeComponent implements OnInit {
  currentImageIndex: number = 0;
  top3 : any = [{'title':'0-6 Months Age Based Toys ->', 'image':'assets/images/age0.webp', 'age': '0-6', 'groupId': 1}, {'title':'6-12 Months Age Based Toys ->', 'image':'assets/images/age1.webp' , 'age': '6-12', 'groupId': 2}, {'title':'12-18 Months Age Based Toys ->  ', 'image':'assets/images/age2.webp', 'age': '12-18', 'groupId': 3},
  {'title':'18-24 Months Age Based Toys ->', 'image':'assets/images/age3.webp','age': '18-24', 'groupId': 4}, {'title':'24-30 Months Age Based Toys ->', 'image':'assets/images/ahe4.webp', 'age': '24-30', 'groupId': 5}, {'title': '30-36 Months Age Based Toys ->', 'image':'assets/images/age5.webp', 'age': '30-36', 'groupId': 6}];  ;
  user: User = {} as User ;
  toysOnSale : any = [];

  constructor(private renderer: Renderer2, private elementRef: ElementRef, private artPtgService : ArtPaintingService, private userStore: Store<{user: User}>, private saleService: SalesService, private route: Router) {
    this.userStore.select('user').subscribe((res) =>{ (this.user = res); console.log(this.user)})
  }
  ngOnInit(): void {
   
    this.saleService.getToysOnSale().subscribe(res => {
      this.toysOnSale = res;
    });


  }
  expandedAccordions: { [key: string]: boolean } = {};
  imagePaths: string[] = [
    "//toyexchange.ca/cdn/shop/files/LG1_7211_6f6c1051-27af-4218-830c-95fbd547e1dd.jpg?v=1685031195&amp",
    '//toyexchange.ca/cdn/shop/files/B_WArtCards.jpg?v=1706893841',

  ];

  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.imagePaths.length;
  }

  prevImage(): void {
    this.currentImageIndex = (this.currentImageIndex - 1 + this.imagePaths.length) % this.imagePaths.length;
  }

  changeImage(index: number): void {
    this.currentImageIndex = index;
  }
  toggleAccordion(targetId: string): void {

    const target = this.elementRef.nativeElement.querySelector('#' + targetId);
    const isExpanded = this.isAccordionExpanded(targetId);

    if (target && this.renderer) {
      if (isExpanded) {
        this.renderer.removeClass(target, 'show');
      } else {
        this.renderer.addClass(target, 'show');
      }
    }

    this.expandedAccordions[targetId] = !isExpanded;
  }

  isAccordionExpanded(targetId: string): boolean {
    return this.expandedAccordions[targetId] || false;
  }

  goToGroupToys(age: string, groupId: number) {
    this.route.navigate([`/gallery/age/${age}/${groupId}`]);
  }

  goToDetails(id: number) {
    this.route.navigate([`/gallery/${id}`]);
  }

  goToAll() {
    this.route.navigate(['/gallery']);
  }
}


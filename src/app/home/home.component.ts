import { Component, Renderer2 } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn, fadeOut } from 'ng-animate';
import { ElementRef } from '@angular/core';
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
export class HomeComponent {
  currentImageIndex: number = 0;
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  expandedAccordions: { [key: string]: boolean } = {};
  imagePaths: string[] = [
    'assets/images/slika4.jpg',
    'assets/images/slika3.jpg',
    'assets/images/slika5.jpg'
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
}


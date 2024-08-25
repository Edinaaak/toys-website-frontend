import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  articles = [
    {
      image: 'blog1.webp',
      title: 'The Lifecycle of Our Educational Wooden Toys',
      date: new Date('2023-12-28'),
      summary: `Have you ever wondered what happens to our educational wooden toys after they're retired from our subscription boxes? Something we don’t speak of often, is that we are one of the...`,
      comments: 1
    },
    {
      image: 'blog2.webp',
      title: 'Why I Love Our Ethical and Sustainable Packaging',
      date: new Date('2023-11-16'),
      summary: `Things that might seem trivial, like the bags we pack our toys in, can actually have a significant impact as we scale. An impact on the people who make them...`,
      comments: 0
    },
    {
      title: '7 Ways we are Creating a Gender Inclusive Home',
      date: new Date('2023-07-18'),
      summary: 'With the month of Pride coming to an end...',
      image: 'blog3.webp',
      comments:  2  },
    {
      title: 'Wooden Toy Rentals: Marching Against the Status Quo',
      date: new Date('2023-05-16'),
      summary: 'Is your house cluttered with piles of toys...',
      image: 'blog4.webp',
      comments: 9
    },
    {
      title: 'Unleashing the Power of Montessori Toys',
      date: new Date('2023-05-14'),
      summary: 'As parents, we all want to provide the best...',
      image: 'blog5.webp',
      comments: 3
    },
    {
      title: 'Top three reasons to invest in your child’s development',
      date: new Date('2023-04-13'),
      summary: 'Having children and having toys certainly goes hand in hand...',
      image: 'blog6.webp',
      comments: 9
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

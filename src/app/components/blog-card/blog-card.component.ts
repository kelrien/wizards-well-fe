import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent {
  @Input()
  title: string = '';

  @Input()
  backgroundImageUrl: string = '';

  @Input()
  articleId?: Number;

  get link(): string {
    return `/articles/${this.articleId}`;
  }
}

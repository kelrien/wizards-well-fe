import { Component, OnInit } from '@angular/core';
import { BlogItem } from 'src/app/domain-models.model';
import { ArticleServiceService } from 'src/app/services/article-service.service';

@Component({
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  articles: BlogItem[] = [];

  constructor(private articleService: ArticleServiceService) {}

  ngOnInit(): void {
    this.articleService.getBlogs().subscribe((articles) => {
      this.articles = articles;
    });
  }
}

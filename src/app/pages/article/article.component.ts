import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route } from '@angular/router';
import { BlogItem } from 'src/app/domain-models.model';
import { ArticleServiceService } from 'src/app/services/article-service.service';

@Component({
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  constructor(
    private blogService: ArticleServiceService,
    private route: ActivatedRoute
  ) {}
  article?: BlogItem;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.blogService.getBlogById(params['id']).subscribe((article) => {
        debugger;
        this.article = article;
      });
    });
  }
}

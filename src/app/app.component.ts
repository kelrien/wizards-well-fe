import { Component, OnInit } from '@angular/core';
import { BlogItem } from './domain-models.model';
import { ArticleServiceService } from './services/article-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wizards-well-page';

  socials: BlogItem[] = [];

  constructor(private articleService: ArticleServiceService){

  }
  ngOnInit(): void {
    this.articleService.getSocials().subscribe(socials => {
      this.socials = socials;
    })
  }
}

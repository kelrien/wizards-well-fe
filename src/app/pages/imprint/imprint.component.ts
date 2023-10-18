import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ImprintItem, SocialMediaItem } from 'src/app/domain-models.model';
import { ArticleServiceService } from 'src/app/services/article-service.service';

@Component({
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent implements OnInit {

  constructor(private articleService : ArticleServiceService){}

  imprint$?: Observable<ImprintItem>;
  imprint?: ImprintItem;

  ngOnInit(): void {
    this.imprint$ = this.articleService.getImprint();
    this.imprint$.subscribe()
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleServiceService } from 'src/app/services/article-service.service';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit{
  constructor(private articleService : ArticleServiceService){}

  contact$?: Observable<any>;
  ngOnInit(): void {
    this.contact$ = this.articleService.getContact();
    this.contact$.subscribe()
  }
}

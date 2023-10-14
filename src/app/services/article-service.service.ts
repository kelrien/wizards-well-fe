import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BlogItem, ImprintItem, StrapiItem, StrapiResponse } from '../domain-models.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticleServiceService {
  constructor(private http: HttpClient) {}

  getBlogs(): Observable<BlogItem[]> {
    return this.http
      .get<StrapiResponse>(
        environment.API_BASE_URL +
          '/api/wizards-well-items?filters[type][$eq]=Blog&populate[0]=tileImage'
      )
      .pipe(map((response) => this.mapResponseToBlogs(response)));
  }

  getBlogById(id: Number): Observable<BlogItem> {
    return this.http
      .get<any>(
        `${environment.API_BASE_URL}/api/wizards-well-items/${id}?populate[0]=tileImage`
      )
      .pipe(
        map((item) => {
          var imageUrl = '';
          if (item.data.attributes.tileImage.data) {
            imageUrl =
              environment.API_BASE_URL +
              item.data.attributes.tileImage?.data.attributes.url;
          }
          return {
            content: item.data.attributes.content,
            id: item.data.id,
            createdAt: item.data.attributes.createdAt,
            updatedAt: item.data.attributes.updatedAt,
            publishedAt: item.data.attributes.publishedAt,
            title: item.data.attributes.title,
            imageUrl: imageUrl,
          };
        })
      );
  }

  getImprint(): Observable<ImprintItem> {
    return this.http.get<any>(`${environment.API_BASE_URL}/api/impressum`).pipe(
      map((item) => {
        return {
          id: item.id,
          text: item.data.attributes.text
        }
      })
    )
  }

  private mapResponseToBlogs(response: StrapiResponse): BlogItem[] {
    const result = response.data.map<BlogItem>((item) => {
      var imageUrl = '';
      if (item.attributes.tileImage.data) {
        imageUrl =
          environment.API_BASE_URL +
          item.attributes.tileImage?.data.attributes.url;
      }
      return {
        content: item.attributes.content,
        id: item.id,
        createdAt: item.attributes.createdAt,
        updatedAt: item.attributes.updatedAt,
        publishedAt: item.attributes.publishedAt,
        title: item.attributes.title,
        imageUrl: imageUrl,
      };
    });
    return result;
  }
}

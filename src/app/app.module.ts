import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownModule } from 'ngx-markdown';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './pages/main/main.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { ArticleComponent } from './pages/article/article.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { SocialsItemComponent } from './components/socials-item/socials-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ImprintComponent,
    ContactComponent,
    BlogCardComponent,
    ArticleComponent,
    SafeHtmlPipe,
    SocialsItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

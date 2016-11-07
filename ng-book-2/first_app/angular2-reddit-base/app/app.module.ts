import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RedditApp } from './component/reddit-app/reddit-app.component';
import { RedditArticleComponent } from './component/reddit-article/reddit-article.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ RedditApp, RedditArticleComponent ],
  bootstrap:    [ RedditApp ]
})
export class AppModule { }


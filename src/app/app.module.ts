import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieComponent } from './component/movie/movie.component';
import { LiveComponent } from './component/live/live.component';
import { MovieRequestComponent } from './component/movie-request/movie-request.component';
import { FeatureRequestComponent } from './component/feature-request/feature-request.component';
import { ReportComponent } from './component/report/report.component';
import { NotfoundComponent } from './component/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    LiveComponent,
    MovieRequestComponent,
    FeatureRequestComponent,
    ReportComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: MovieComponent },
      { path: 'live', component: LiveComponent },
      { path: 'movie-request', component: MovieRequestComponent },
      { path: 'feature-request', component: FeatureRequestComponent },
      { path: 'report', component: ReportComponent },
      { path: 'feature-request', component: FeatureRequestComponent },
      { path: '**', component: NotfoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

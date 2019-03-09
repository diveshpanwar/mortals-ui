import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavigationComponent } from './navigation/navigation.component';
import { MatModule } from './shared/mat/mat.module';
import { CustomRoutingModule } from './shared/custom-routing/custom-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AlertComponent } from './alert/alert.component';
import { FooterComponent } from './footer/footer.component';
import { TopicsComponent } from './topics/topics.component';
import { TopicService } from './services/topic.service';
import { SingleTopicComponent } from './single-topic/single-topic.component';
import { ConsumerComponent } from './consumer/consumer.component';
import { ProducerComponent } from './producer/producer.component';
import { ConsumerService } from './services/consumer.service';
import { ProducerService } from './services/producer.service';
import { AnalyticService } from './services/analytic.service';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ChartsModule } from 'ng2-charts';
import { SettingsComponent } from './settings/settings.component';
import { SettingsService } from './services/settings.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ErrorComponent,
    AlertComponent,
    SettingsComponent,
    FooterComponent,
    TopicsComponent,
    SingleTopicComponent,
    ConsumerComponent,
    ProducerComponent,
    AnalyticsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatModule,
    CustomRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    ChartsModule
  ],
  providers: [
    TopicService,
    ConsumerService,
    ProducerService,
    AnalyticService,
    SettingsService
  ],
  entryComponents: [
    AlertComponent,
    SettingsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

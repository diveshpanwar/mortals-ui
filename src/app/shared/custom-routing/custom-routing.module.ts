import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../home/home.component';
import { ErrorComponent } from '../../error/error.component';
import { TopicsComponent } from 'src/app/topics/topics.component';
import { SingleTopicComponent } from 'src/app/single-topic/single-topic.component';
import { ConsumerComponent } from 'src/app/consumer/consumer.component';
import { ProducerComponent } from 'src/app/producer/producer.component';
import { AnalyticsComponent } from 'src/app/analytics/analytics.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'topics', component: TopicsComponent },
  { path: 'topic/:topicId', component: SingleTopicComponent },
  { path: 'consumer', component: ConsumerComponent },
  { path: 'producer', component: ProducerComponent },
  { path: 'analytics', component: AnalyticsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class CustomRoutingModule {}

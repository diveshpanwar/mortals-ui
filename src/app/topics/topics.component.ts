import { Component, OnInit } from '@angular/core';
import { TopicService } from '../services/topic.service';
import { Router, NavigationExtras } from '@angular/router';
import { topics } from '../data/topics';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  topicData: any;
  dataLoaded = false;
  error = null;
  navigationExtras: NavigationExtras;
  constructor(private topicsService: TopicService, private router: Router) {}

  ngOnInit() {
    this.topicData = null;
    this.dataLoaded = false;
    this.error = null;
    // this.topicsService.getTopics().subscribe(
    //   res => {
    //     this.dataLoaded = true;
    //     this.topicData = res;
    //     console.log(this.topicData);
    //   },
    //   err => {
    //     this.error = err;
    //   }
    // );

    // dummyData
    this.dataLoaded = true;
    this.topicData = topics;
  }

  handleConsumerClick(topicId, topic_name) {
    this.navigationExtras = {
      queryParams: { topic_name: topic_name, tp_id: topicId }
    };
    this.router.navigate(['/consumer'], this.navigationExtras);
  }

  handleProducerClick(topicId, topic_name) {
    this.navigationExtras = {
      queryParams: { topic_name: topic_name, tp_id: topicId }
    };
    this.router.navigate(['/producer'], this.navigationExtras);
  }
}

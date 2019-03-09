import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-topic',
  templateUrl: './single-topic.component.html',
  styleUrls: ['./single-topic.component.css']
})
export class SingleTopicComponent implements OnInit {
  topicId = null;
  contentLoaded = false;
  consumers = [
    {
      _id: '1',
      from: 'test',
      consumerRate: 'Test',
      producerRate: 'sjgfsdfgdkf'
    },
    {
      _id: '2',
      from: 'test',
      consumerRate: 'Test',
      producerRate: 'sjgfsdfgdkf'
    },
    {
      _id: '3',
      from: 'test',
      consumerRate: 'Test',
      producerRate: 'sjgfsdfgdkf'
    },
    {
      _id: '4',
      from: 'test',
      consumerRate: 'Test',
      producerRate: 'sjgfsdfgdkf'
    }
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.topicId = params.topicId;
      console.log(this.topicId);
      this.contentLoaded = true;
    });
  }
}

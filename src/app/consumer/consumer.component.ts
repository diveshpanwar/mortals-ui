import { Component, OnInit } from '@angular/core';
import { consumers } from '../data/consumers';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {
  dataLoaded = false;
  consumers = null;
  tp_id = null;
  topic_name = null;
  c_id = null;
  consumer_name = null;
  form = null;
  inpDateTo = null;
  inpTimeTo = null;
  inpDateFrom = null;
  inpTimeFrom = null;
  analyticForm: FormGroup;
  navigationExtras: NavigationExtras;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.tp_id = params.tp_id;
      this.topic_name = params.topic_name;
      this.consumers = consumers;
      this.dataLoaded = true;
    });
  }

  sendToAnalytics(c_id, consumer_name) {
    this.c_id = c_id;
    this.consumer_name = consumer_name;

    console.log(c_id, consumer_name);
    let dialogRef = this.dialog.open(AlertComponent, {
      width: '80%',
      data: { c_id: this.c_id }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.inpDateFrom = result.inpDateFrom;
        this.inpTimeFrom = result.inpTimeFrom;
        this.inpDateTo = result.inpDateTo;
        this.inpTimeTo = result.inpTimeTo;

        this.navigationExtras = {
          queryParams: {
            tp_id: this.tp_id,
            topic_name: this.topic_name,
            c_id: c_id,
            consumer_name: consumer_name,
            inpDateTo: this.inpDateTo,
            inpTimeTo: this.inpTimeTo,
            inpDateFrom: this.inpDateFrom,
            inpTimeFrom: this.inpTimeFrom,
            type: 'consumer'
          }
        };

        this.router.navigate(['analytics'], this.navigationExtras);
        console.log(this.navigationExtras);
      }
    });
  }
}

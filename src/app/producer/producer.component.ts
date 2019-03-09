import { Component, OnInit } from '@angular/core';
import { producers } from '../data/producers';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-producer',
  templateUrl: './producer.component.html',
  styleUrls: ['./producer.component.css']
})
export class ProducerComponent implements OnInit {
  dataLoaded = false;
  producers = null;
  tp_id = null;
  topic_name = null;
  p_id = null;
  producer_name = null;
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
      this.producers = producers;
      this.dataLoaded = true;
    });
  }

  sendToAnalytics(p_id, producer_name) {
    this.p_id = p_id;
    this.producer_name = producer_name;

    console.log(p_id, producer_name);
    const dialogRef = this.dialog.open(AlertComponent, {
      width: '80%',
      data: { p_id: this.p_id }
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
            p_id: p_id,
            producer_name: producer_name,
            inpDateTo: this.inpDateTo,
            inpTimeTo: this.inpTimeTo,
            inpDateFrom: this.inpDateFrom,
            inpTimeFrom: this.inpTimeFrom,
            type: 'producer'
          }
        };

        this.router.navigate(['analytics'], this.navigationExtras);
        console.log(this.navigationExtras);
      }
    });
  }
}

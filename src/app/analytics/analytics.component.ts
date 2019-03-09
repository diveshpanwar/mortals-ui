import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  queryParams: any;
  fromDate = null;
  toDate = null;
  dataLoaded = false;
  interval = null;
  realTime = false;
  data = [
    65,
    59,
    80,
    81,
    56,
    55,
    40,
    59,
    80,
    81,
    56,
    55,
    40,
    65,
    59,
    80,
    81,
    56,
    55,
    40,
    59,
    80,
    81,
    56,
    55,
    40
  ];

  public lineChartData: any[] = [
    {
      data: this.data.slice(-26),
      label: 'Data vs Rate'
    }
  ];
  public lineChartLabels: any[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartOptions: any & { annotation: any } = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left'
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        }
      ]
    }
  };
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.dataLoaded = true;
    this.route.queryParams.subscribe(params => {
      this.queryParams = params;
      console.log(this.queryParams);
      if (this.queryParams) {
        this.toDate = new Date(
          `${this.queryParams.inpDateTo} ${this.queryParams.inpTimeTo}`
        ).getTime();
        this.fromDate = new Date(
          `${this.queryParams.inpDateFrom} ${this.queryParams.inpTimeFrom}`
        ).getTime();
        console.log(this.toDate, this.fromDate);
      }
      if (this.realTime) {
        this.interval = setInterval(() => {
          console.log(this.data);
          const clone = JSON.parse(JSON.stringify(this.lineChartData));
          this.data.push(Math.floor(Math.random() * 100 + 1));
          clone[0].data = this.data.slice(-26);
          this.lineChartData = clone;
        }, 2000);
      }
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}

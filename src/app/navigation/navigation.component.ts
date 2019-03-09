import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { SettingsComponent } from '../settings/settings.component';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title = 'Kafka Monitor';
  settingsInterval = 15;
  searchForm: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      searchCriteria: ['']
    });
  }

  openSettings() {
    const dialogRef = this.dialog.open(SettingsComponent, {
      width: '50%',
      data: { settingsInterval: this.settingsInterval }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        console.log(result);
        this.settingsInterval = result.interval;
      }
    });
  }

  logout() {
    window.sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}

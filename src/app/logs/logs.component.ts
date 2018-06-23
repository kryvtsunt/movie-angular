import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../models/user.model.client';
import {ActivityServiceClient} from '../services/activity.service.client';


@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})

export class LogsComponent implements OnInit {
  constructor(private logservice: ActivityServiceClient,
              private route: ActivatedRoute) {
  }

  activities = [];
  routerLink: string

  ngOnInit() {
    this.logservice
      .findAllActivities()
      .then(activities => {this.activities = activities;
      });
  }

}

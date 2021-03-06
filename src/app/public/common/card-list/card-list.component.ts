import { Component, OnInit, Input } from '@angular/core';
import { EventBusService } from '../../service/bus-event.service';
import { OwnGithubSearchOutput } from '../../model/github-item.model';
import { OwnCloudMusicOutput } from '../../model/cloud-music.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  searchResult: OwnGithubSearchOutput | OwnCloudMusicOutput = new OwnGithubSearchOutput();

  constructor(
    private eventBusService: EventBusService,
  ) {
    eventBusService.searchResult
      .subscribe(res => this.searchResult = res);
  }

  ngOnInit() {
  }

}

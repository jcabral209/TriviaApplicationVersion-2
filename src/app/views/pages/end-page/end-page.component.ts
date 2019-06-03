import { Component, OnInit } from '@angular/core';
import { GrabDataService } from 'src/app/services/grab-data.service';


@Component({
  selector: 'app-end-page',
  templateUrl: './end-page.component.html',
  styleUrls: ['./end-page.component.css']
})
export class EndPageComponent implements OnInit {
  totalCorrect: number;
  totalTimeOut: number;
  totalQuestion: number;
  constructor(private grabDataServices: GrabDataService) { }

  ngOnInit() {

this.totalCorrect = this.grabDataServices.getTotalCorrect();
this.totalTimeOut = this.grabDataServices.getTotalTimeOut();
this.totalQuestion = this.grabDataServices.getTotalQuestion();
  }

}

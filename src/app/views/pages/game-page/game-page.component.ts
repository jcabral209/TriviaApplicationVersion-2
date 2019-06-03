import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { SpecData } from 'src/app/interfaces/spec-data';
import { GetDataService } from 'src/app/services/get-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { GrabDataService } from 'src/app/services/grab-data.service';
import { Config, CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit, OnDestroy {
  config: Config;
  @ViewChild(CountdownComponent) counter: CountdownComponent;
  subscription: Subscription = new Subscription();
  triviaQ: SpecData[] = [];
  topic: string;
  levelId: string;
  triviaIndex: any[] = [];
  qOrder: any[] = [];
  aOrder: any[] = [];
  qIndex: number;
  correctCount: number;
  cat: string;
  q: string;
  a1: string;
  a2: string;
  a3: string;
  a4: string;
  userA: string;
  correctA: string;
  numQuestions = 10;
  triviaAnswers: any[];
  skipTotal: number;
  totalQuestions: number;
  endGame: boolean;

  constructor(private triviaGame: GetDataService,
              private _route: ActivatedRoute,
              private _router: Router,
              private grabDataService: GrabDataService) { }

  ngOnInit() {
    this.varInit();
  }
  varInit() {
    this._route.params.subscribe(params => {
      this.levelId = params.levelId;
      this.topic = params.topic;

    });
    this.triviaQ = [];
    this.qOrder = [];
    this.aOrder = [];
    this.triviaAnswers = [];
    this.qIndex = 0;
    this.correctCount = 0;
    this.cat = 'Nothing To Display';
    this.q = 'Nothing To Display';
    this.a1 = 'Nothing To Display';
    this.a2 = 'Nothing To Display';
    this.a3 = 'Nothing To Display';
    this.a4 = 'Nothing To Display';
    this.userA = 'none';
    this.correctA = '';
    this.skipTotal = 0;
    this.totalQuestions = 11;
    this.endGame = false;
    this.getQuestions();
  }
  getQuestions() {
    this.subscription.add(
      this.grabDataService.getTriviaQuestions(this.topic, this.levelId).subscribe(
        x => {

          for (const q of x.feed.entry) {
            const nfo: SpecData = {
              category: q['gsx$category']['$t'],
              difficulty: q['gsx$difficulty']['$t'],
              question: q['gsx$question']['$t'],
              answer_1: q['gsx$answer1']['$t'],
              answer_2: q['gsx$answer2']['$t'],
              answer_3: q['gsx$answer3']['$t'],
              answer_4: q['gsx$answer4']['$t'],
              correct_answer: q['gsx$correctanswer']['$t']
            };
            this.triviaQ.push(nfo);
          }
          this.triviaGame.shuffleArray(this.qOrder, this.triviaQ.length);
          this.displayTriviaQ(this.userA);
        }
      ));
  }
  displayTriviaQ(ans: string) {
    if (this.qIndex < this.numQuestions) {

      if (this.qIndex > 0 && ans === this.correctA) {

        this.correctCount++;
        this.totalQuestions--;
      } else {
        this.totalQuestions--;
      }

      if (ans === 'Not Answered') {
        this.skipTotal++;
        this.totalQuestions--;
      }

      this.triviaGame.shuffleArray(this.aOrder, 4);
      this.triviaAnswers[0] = this.triviaQ[this.qOrder[this.qIndex]].answer_1;
      this.triviaAnswers[1] = this.triviaQ[this.qOrder[this.qIndex]].answer_2;
      this.triviaAnswers[2] = this.triviaQ[this.qOrder[this.qIndex]].answer_3;
      this.triviaAnswers[3] = this.triviaQ[this.qOrder[this.qIndex]].answer_4;
      this.a1 = this.triviaAnswers[this.aOrder[0]];
      this.a2 = this.triviaAnswers[this.aOrder[1]];
      this.a3 = this.triviaAnswers[this.aOrder[2]];
      this.a4 = this.triviaAnswers[this.aOrder[3]];
      this.triviaAnswers[0] = this.a1;
      this.triviaAnswers[1] = this.a2;
      this.triviaAnswers[2] = this.a3;
      this.triviaAnswers[3] = this.a4;
      this.q = this.triviaQ[this.qOrder[this.qIndex]].question;
      this.cat = this.triviaQ[this.qOrder[this.qIndex]].category;
      this.correctA = this.triviaQ[this.qOrder[this.qIndex]].correct_answer;
      this.qIndex++;
      this.aOrder = [];
      this.config = {
        leftTime: 30,
      };
      this.counter.restart();
    } else {
      if (ans === this.correctA) {
        this.correctCount++;
      }
      if (ans === 'Not Answered') {
        this.skipTotal++;
      }
      this.endGame = true;
      this._router.navigate(['/', 'endGame']).then(nav => {
      }, err => {
      });
    }
  }

  resetTimer() {
    this.counter.restart();
    this.counter.stop();
    this.counter.pause();
    this.counter.resume();
  }
  onFinished() {
    this.displayTriviaQ('Not Answered');
  }

  ngOnDestroy() {
    this.setEndGameStats();
    this.subscription.unsubscribe();
  }

  setEndGameStats() {
    this.grabDataService.setTotalCorrect(this.correctCount);
    this.grabDataService.setTotalQuestion(this.numQuestions);
    this.grabDataService.setTotalTimeOut(this.skipTotal);
  }
}


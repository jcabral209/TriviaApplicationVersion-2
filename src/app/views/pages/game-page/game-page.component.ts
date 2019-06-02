import { Component, OnInit, OnDestroy } from '@angular/core';
import { SpecData } from 'src/app/interfaces/spec-data';
import { GetDataService } from 'src/app/services/get-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GrabDataService } from 'src/app/services/grab-data.service';
@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.css']
})
export class GamePageComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  triviaQ: SpecData[] = [];
  topic: string;
  levelId: string;
  triviaIndex: any[] = [];
  qOrder: any[] = [];
  aOrder: any[] = [];
  qIndex: number;
  correctCount: number;
  q: string;
  a1: string;
  a2: string;
  a3: string;
  a4: string;
  userA: string;
  correctA: string;
  noQuestions = 10;
  answerA: any[];

  constructor(private triviaGame: GetDataService,
              private _route: ActivatedRoute,
              private _router: Router,
              private grabDataService: GrabDataService) { }

  ngOnInit() {
    this.initialize();
    this._route.params.subscribe(params => {
      this.levelId = params.levelId;
      this.topic = params.topic;
      this.getQuestions();
    });
  }
  initialize() {
    this.triviaQ = [];
    this.triviaIndex = [];
  }
  getQuestions() {
    this.subscription.add(
      this.grabDataService.getTriviaQuestions(this.topic, this.levelId).subscribe(
        x => {
          console.log('This my NEW API call --->>>> ', x);
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
            console.log ('My triviaQ ++++++> ', this.triviaQ.length);
          }
          
        }
      ));
    /* console.log('This is what I have in triviaQ', Object.getOwnPropertyNames(this.triviaQ));
    console.log('This is length -->', this.triviaQ);
    this.triviaGame.shuffleArray(this.triviaIndex, this.triviaQ.length);
    console.log('This is my trviaQ index Array shuffled -> ', this.triviaIndex); */
  }
  varInit() {
    this.triviaQ = [];
    this.qOrder = [];
    this.aOrder = [];
    this.answerA = [];
    this.qIndex = 0;
    this.correctCount = 0;
    this.q = 'Nothing To Display';
    this.a1 = 'Nothing To Display';
    this.a2 = 'Nothing To Display';
    this.a3 = 'Nothing To Display';
    this.a4 = 'Nothing To Display';
    this.userA = 'none';
    this.correctA = '';
    this.getQuestions();
  }
  displayTriviaQ(ans: string) {
    if (this.qIndex < this.noQuestions) {
      if (this.qIndex > 0 && ans === this.triviaQ[this.qOrder[this.qIndex]].correct_answer) {
        this.correctCount++;
      }
      this.triviaGame.shuffleArray(this.aOrder, 4);
      console.log('This is the order of the answers --> ', this.aOrder);
      console.log(
        'displayTriviaQ() SAYS -> ',
        this.triviaQ[this.qOrder[this.qIndex]]
      );
      /* console.log('This is index for answer 1 ===> ', this.aOrder[0]);
      console.log(
        'This is content for answer 1 from aOrder ===> ',
        this.triviaQ[this.qOrder[this.aOrder[0]]].a1
      ); */
      this.answerA[0] = this.triviaQ[this.qOrder[this.qIndex]].answer_1;
      this.answerA[1] = this.triviaQ[this.qOrder[this.qIndex]].answer_2;
      this.answerA[2] = this.triviaQ[this.qOrder[this.qIndex]].answer_3;
      this.answerA[3] = this.triviaQ[this.qOrder[this.qIndex]].answer_4;
      console.log('This is index for answerA ===> ', this.answerA);
      this.a1 = this.answerA[this.aOrder[0]];
      this.a2 = this.answerA[this.aOrder[1]];
      this.a3 = this.answerA[this.aOrder[2]];
      this.a4 = this.answerA[this.aOrder[3]];
      this.answerA[0] = this.a1;
      this.answerA[1] = this.a2;
      this.answerA[2] = this.a3;
      this.answerA[3] = this.a4;
      this.q = this.triviaQ[this.qOrder[this.qIndex]].question;
      this.correctA = this.triviaQ[this.qOrder[this.qIndex]].correct_answer;
      console.log('This is the question -> ', this.q);
      console.log('This is a1 -> ', this.a1);
      console.log('This is a2 -> ', this.a2);
      console.log('This is a3 -> ', this.a3);
      console.log('This is a4 -> ', this.a4);
      console.log('This is the correct Answer -> ', this.correctA);
      console.log('This is correctCount -> ', this.correctCount);
      this.qIndex++;
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

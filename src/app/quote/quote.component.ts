import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{Quote} from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote ('Beatrice','Communication','Communications tools don’t get socially interesting until they get technologically boring.','Clay Shirky',new Date(2019,7,7),0,0),
    new Quote ('Charles','Code and people','Programs must be written for people to read, and only incidentally for machines to execute.','Harold Abelson',new Date(2019,7,17),0,0),
    new Quote ('Alfred','Tech and life','For a list of all the ways technology has failed to improve the quality of life, please press three.','Alice Kahn',new Date(2019,7,15),0,0)
  ];
  showMore(index){
    this.quotes(index).showMore=!this.quotes(index).showMore
  }
  constructor() { }

  ngOnInit(): void {
  }

}

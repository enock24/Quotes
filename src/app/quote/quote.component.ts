import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1,'Beatrice', 'Communication', 'Communications tools don’t get socially interesting until they get technologically boring.', 'Clay Shirky', new Date(2019,7,7)),
    new Quote(2,'Charles', 'Code and people', 'Programs must be written for people to read, and only incidentally for machines to execute.', 'Harold Abelson', new Date(2019,7,17)),
    new Quote(3, 'Alfred', 'Tech and life', 'For a list of all the ways technology has failed to improve the quality of life, please press three.', 'Alice Kahn', new Date(2019,7,15)),
  ]; 
  addNewQuote(quote) {
    let goalLength = this.quotes.length;
    quote.id = goalLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }   
  showMore(index) {
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  upvote(index){
    this.quotes[index].upvote++;
  }

  downvote(index){
    this.quotes[index].downvote++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '@angular/compiler';
import { emit } from 'process';

@Component({
  selector: 'app-detail-quote',
  templateUrl: './detail-quote.component.html',
  styleUrls: ['./detail-quote.component.css']
})
export class DetailQuoteComponent implements OnInit {
  @Input() quote=Quote;
  @Output()deleteQuote=new EventEmitter<boolean>();
delete(deleteQuote=boolean){
  this.deleteQuote. emit(removeQuote);
}
  constructor() { }

  ngOnInit(): void {
  }

}
